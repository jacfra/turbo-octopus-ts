import { ContainerModule, interfaces } from "inversify";
import { mockDeep, DeepMockProxy } from "jest-mock-extended";
import { PrismaClient } from "@prisma/client";
import { TYPES } from "../../src/dependency-injection/types";

export const mockDatasource = new ContainerModule((bind: interfaces.Bind) => {
  bind<DeepMockProxy<PrismaClient>>(TYPES.DataSource).toConstantValue(
    mockDeep<PrismaClient>()
  );
});
