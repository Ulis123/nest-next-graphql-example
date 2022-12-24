import { useMemo } from "react";
import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, from, NormalizedCacheObject } from "@apollo/client";
import { concatPagination } from "@apollo/client/utilities";
import merge from "deepmerge";
import isEqual from "lodash/isEqual";

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

const isWindow = typeof window !== "undefined";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_BACK_APP_URL}/graphql`, // Server URL (must be absolute)
  credentials: "include", // Additional fetch() options like `credentials` or `headers`
});

// const authMiddleware = new ApolloLink((operation, forward) => {
//   // add the authorization to the headers
//   const token = isWindow ? localStorage.getItem("token") : null;
//   operation.setContext(({ headers = {} }) => ({
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   }));
//
//   return forward(operation);
// });

function createApolloClient() {
  return new ApolloClient({
    ssrMode: !isWindow,
    link: from([/*authMiddleware,*/ httpLink]),
    cache: new InMemoryCache({
      // typePolicies: {
      //   Query: {
      //     fields: {
      //       allPosts: concatPagination(),
      //     },
      //   },
      // },
    }),
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter(d => sourceArray.every(s => !isEqual(d, s))),
      ],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (!isWindow) return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function addApolloState(client: ApolloClient<any>, pageProps: { props: {} }) {
  if (pageProps?.props) {
    // @ts-ignore
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

export function useApollo(pageProps: { [x: string]: any }): ApolloClient<NormalizedCacheObject> {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  return useMemo(() => initializeApollo(state), [state]);
}
