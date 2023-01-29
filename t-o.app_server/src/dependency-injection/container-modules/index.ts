import { database } from "./datasource";
import { resolvers } from "./resolver";
import { services } from "./service";
import { utilities } from "./utility";

export const CONTAINER_MODULES = [database, resolvers, services, utilities];
