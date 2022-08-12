// THIS IS A GENERATED FILE, use `yarn codegen` to regenerate
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type ICategory = {
  __typename?: 'Category';
  id: Scalars['ID'];
  name: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
};

export type IChangeEmailInput = {
  email: Scalars['String'];
};

export type IChangePasswordInput = {
  confirm: Scalars['String'];
  current: Scalars['String'];
  newPass: Scalars['String'];
};

export type ICreateCategoryInput = {
  name: Scalars['String'];
  picture?: InputMaybe<Scalars['String']>;
};

export type ICreateSkillInput = {
  name: Scalars['String'];
};

export type ICreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export enum IGender {
  Female = 'FEMALE',
  Male = 'MALE'
}

export type ILogOutOutput = {
  __typename?: 'LogOutOutput';
  result: Scalars['Boolean'];
};

export type ILoginOutput = {
  __typename?: 'LoginOutput';
  /** JWT token */
  token: Scalars['String'];
};

export type IMutation = {
  __typename?: 'Mutation';
  changeEmail: IUser;
  changePassword: IUser;
  createCategory: ICategory;
  createSkill: ISkill;
  logIn: ILoginOutput;
  logOut: ILogOutOutput;
  registerUser: IUser;
  removeUser: IUser;
  updateUser: IUser;
};


export type IMutationChangeEmailArgs = {
  changeEmailInput: IChangeEmailInput;
};


export type IMutationChangePasswordArgs = {
  changePasswordInput: IChangePasswordInput;
};


export type IMutationCreateCategoryArgs = {
  createCategoryInput: ICreateCategoryInput;
};


export type IMutationCreateSkillArgs = {
  createSkillInput: ICreateSkillInput;
};


export type IMutationLogInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationRegisterUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationRemoveUserArgs = {
  id: Scalars['Int'];
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
};

export type IQuery = {
  __typename?: 'Query';
  categories: Array<ICategory>;
  category: ICategory;
  me: IUser;
  skill: ISkill;
  skills: Array<ISkill>;
  user: IUser;
  users: Array<IUser>;
};


export type IQueryCategoryArgs = {
  id: Scalars['Int'];
};


export type IQuerySkillArgs = {
  id: Scalars['Int'];
};


export type IQueryUserArgs = {
  id: Scalars['Int'];
};

export type ISkill = {
  __typename?: 'Skill';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type IUpdateUserInput = {
  about?: InputMaybe<Scalars['String']>;
  birthday?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  facebookUrl?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<IGender>;
  id: Scalars['ID'];
  lastName?: InputMaybe<Scalars['String']>;
  linkedinUrl?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  step?: InputMaybe<Scalars['Int']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
  workEmail?: InputMaybe<Scalars['String']>;
};

export type IUser = {
  __typename?: 'User';
  about?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  enabled?: Maybe<Scalars['Boolean']>;
  facebookUrl?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<IGender>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  linkedinUrl?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  phone?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  step?: Maybe<Scalars['Int']>;
  websiteUrl?: Maybe<Scalars['String']>;
  workEmail?: Maybe<Scalars['String']>;
};

export type IMeQueryVariables = Exact<{ [key: string]: never; }>;


export type IMeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, email: string, workEmail?: string | null, firstName?: string | null, lastName?: string | null, gender?: IGender | null, about?: string | null, phone?: string | null, linkedinUrl?: string | null, facebookUrl?: string | null, websiteUrl?: string | null, picture?: string | null, step?: number | null, enabled?: boolean | null } };

export type ISkillsQueryVariables = Exact<{ [key: string]: never; }>;


export type ISkillsQuery = { __typename?: 'Query', skills: Array<{ __typename?: 'Skill', id: string, name: string }> };

export type ICategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type ICategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: string, name: string, picture?: string | null }> };


export const MeDocument = gql`
    query me {
  me {
    id
    email
    workEmail
    firstName
    lastName
    gender
    about
    phone
    linkedinUrl
    facebookUrl
    websiteUrl
    picture
    step
    enabled
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<IMeQuery, IMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMeQuery, IMeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMeQuery, IMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMeQuery, IMeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<IMeQuery, IMeQueryVariables>;
export const SkillsDocument = gql`
    query skills {
  skills {
    id
    name
  }
}
    `;

/**
 * __useSkillsQuery__
 *
 * To run a query within a React component, call `useSkillsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSkillsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSkillsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSkillsQuery(baseOptions?: Apollo.QueryHookOptions<ISkillsQuery, ISkillsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ISkillsQuery, ISkillsQueryVariables>(SkillsDocument, options);
      }
export function useSkillsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ISkillsQuery, ISkillsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ISkillsQuery, ISkillsQueryVariables>(SkillsDocument, options);
        }
export type SkillsQueryHookResult = ReturnType<typeof useSkillsQuery>;
export type SkillsLazyQueryHookResult = ReturnType<typeof useSkillsLazyQuery>;
export type SkillsQueryResult = Apollo.QueryResult<ISkillsQuery, ISkillsQueryVariables>;
export const CategoriesDocument = gql`
    query categories {
  categories {
    id
    name
    picture
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<ICategoriesQuery, ICategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ICategoriesQuery, ICategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ICategoriesQuery, ICategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ICategoriesQuery, ICategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<ICategoriesQuery, ICategoriesQueryVariables>;