// deno-lint-ignore-file no-explicit-any
type Maybe<T> = T | null
type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Email: any
  Date: any
  DateTime: any
  MacAddress: any
  IpAddress: any
  Time: any
  Upload: any
  /** Any constant literal value: https://graphql.github.io/graphql-spec/draft/#sec-Input-Values */
  BuilderValue: any
}

type Merge<A, B> = {
  [K in keyof A | keyof B]:
    K extends keyof A & keyof B
    ? A[K] | B[K]
    : K extends keyof B
    ? B[K]
    : K extends keyof A
    ? A[K]
    : never;
};