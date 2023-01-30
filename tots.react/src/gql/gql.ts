/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query demo {\n    demo {\n      id,\n      value\n    }\n  }\n": types.DemoDocument,
};

export function graphql(source: "\n  query demo {\n    demo {\n      id,\n      value\n    }\n  }\n"): (typeof documents)["\n  query demo {\n    demo {\n      id,\n      value\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;