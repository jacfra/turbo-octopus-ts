import { mockDatasource } from "./datasource.mock";
import { mockResolvers } from "./resolver.mock";
import { mockServices } from "./service.mock";
import { utilities } from "./utility.mock";

export const CONTAINER_MODULES = [
  mockDatasource,
  mockResolvers,
  mockServices,
  utilities,
];
