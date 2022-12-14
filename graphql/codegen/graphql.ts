/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Author = {
  __typename?: 'Author';
  age?: Maybe<Scalars['Int']>;
  books?: Maybe<Array<Maybe<Book>>>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Author>;
  authorId?: Maybe<Scalars['ID']>;
  genre?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  author?: Maybe<Author>;
  authors?: Maybe<Array<Maybe<Author>>>;
  book?: Maybe<Book>;
  books?: Maybe<Array<Maybe<Book>>>;
};


export type RootQueryAuthorArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type RootQueryBookArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type GetBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBooksQuery = { __typename?: 'RootQuery', books?: Array<{ __typename?: 'Book', id?: string | null, name?: string | null } | null> | null };


export const GetBooksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBooks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"books"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetBooksQuery, GetBooksQueryVariables>;