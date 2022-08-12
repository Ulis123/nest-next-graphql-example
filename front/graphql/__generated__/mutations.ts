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

export type ILogInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type ILogInMutation = { __typename?: 'Mutation', logIn: { __typename?: 'LoginOutput', token: string } };

export type ILogOutMutationVariables = Exact<{ [key: string]: never; }>;


export type ILogOutMutation = { __typename?: 'Mutation', logOut: { __typename?: 'LogOutOutput', result: boolean } };

export type IRegisterUserMutationVariables = Exact<{
  createUserInput: ICreateUserInput;
}>;


export type IRegisterUserMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'User', id: string } };


export const LogInDocument = gql`
    mutation logIn($email: String!, $password: String!) {
  logIn(email: $email, password: $password) {
    token
  }
}
    `;
export type ILogInMutationFn = Apollo.MutationFunction<ILogInMutation, ILogInMutationVariables>;

/**
 * __useLogInMutation__
 *
 * To run a mutation, you first call `useLogInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logInMutation, { data, loading, error }] = useLogInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLogInMutation(baseOptions?: Apollo.MutationHookOptions<ILogInMutation, ILogInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ILogInMutation, ILogInMutationVariables>(LogInDocument, options);
      }
export type LogInMutationHookResult = ReturnType<typeof useLogInMutation>;
export type LogInMutationResult = Apollo.MutationResult<ILogInMutation>;
export type LogInMutationOptions = Apollo.BaseMutationOptions<ILogInMutation, ILogInMutationVariables>;
export const LogOutDocument = gql`
    mutation logOut {
  logOut {
    result
  }
}
    `;
export type ILogOutMutationFn = Apollo.MutationFunction<ILogOutMutation, ILogOutMutationVariables>;

/**
 * __useLogOutMutation__
 *
 * To run a mutation, you first call `useLogOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logOutMutation, { data, loading, error }] = useLogOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogOutMutation(baseOptions?: Apollo.MutationHookOptions<ILogOutMutation, ILogOutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ILogOutMutation, ILogOutMutationVariables>(LogOutDocument, options);
      }
export type LogOutMutationHookResult = ReturnType<typeof useLogOutMutation>;
export type LogOutMutationResult = Apollo.MutationResult<ILogOutMutation>;
export type LogOutMutationOptions = Apollo.BaseMutationOptions<ILogOutMutation, ILogOutMutationVariables>;
export const RegisterUserDocument = gql`
    mutation registerUser($createUserInput: CreateUserInput!) {
  registerUser(createUserInput: $createUserInput) {
    id
  }
}
    `;
export type IRegisterUserMutationFn = Apollo.MutationFunction<IRegisterUserMutation, IRegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      createUserInput: // value for 'createUserInput'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<IRegisterUserMutation, IRegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<IRegisterUserMutation, IRegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<IRegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<IRegisterUserMutation, IRegisterUserMutationVariables>;