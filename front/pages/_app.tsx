import type { AppProps } from "next/app";
import Head from "next/head";
import { SnackbarProvider } from "notistack";
import { ApolloProvider } from "@apollo/client";

import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { useApollo } from "config/apolloClient";
import createEmotionCache from "config/createEmotionCache";
import theme from "config/theme";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ScrollTop } from "components/common";

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>{pageProps.title ?? "Home"}</title>
      </Head>

      <ApolloProvider client={apolloClient}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <SnackbarProvider maxSnack={5} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Component {...pageProps} />

              <ScrollTop />
            </SnackbarProvider>
          </ThemeProvider>
        </CacheProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
