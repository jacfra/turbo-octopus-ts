import { ContainerModule, interfaces } from "inversify";
import { mockDeep } from "jest-mock-extended";
import { DemoResolver } from "../../src/resolver/DemoResolver";

export const mockResolvers = new ContainerModule((bind: interfaces.Bind) => {
  bind<DemoResolver>(DemoResolver).toConstantValue(mockDeep<DemoResolver>());
});
