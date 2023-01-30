/* eslint-disable @typescript-eslint/ban-types */
import { NonEmptyArray } from "type-graphql";
import { DemoResolver } from "./DemoResolver";

export const resolvers: NonEmptyArray<string> | NonEmptyArray<Function> = [
  DemoResolver,
];
