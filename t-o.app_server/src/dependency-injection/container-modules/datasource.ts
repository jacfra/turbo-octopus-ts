import { PrismaClient } from "@prisma/client";
import { ContainerModule, interfaces } from "inversify";
import { TYPES } from "../types";

export const database = new ContainerModule((bind: interfaces.Bind) => {
  bind<PrismaClient>(TYPES.DataSource).toDynamicValue(() => new PrismaClient());
});
