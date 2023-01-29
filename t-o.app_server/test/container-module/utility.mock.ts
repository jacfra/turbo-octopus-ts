import { ContainerModule, interfaces } from "inversify";
import { DeepMockProxy, mockDeep } from "jest-mock-extended";
import { TYPES } from "../../src/dependency-injection/types";
import { ILogger } from "../../src/utility/Log/Logger";

export const utilities = new ContainerModule((bind: interfaces.Bind) => {
  bind<DeepMockProxy<ILogger>>(TYPES.DemoResolver).toConstantValue(
    mockDeep<ILogger>()
  );
});
