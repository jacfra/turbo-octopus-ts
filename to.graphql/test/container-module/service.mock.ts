import { ContainerModule, interfaces } from "inversify";
import { DeepMockProxy, mockDeep } from "jest-mock-extended";
import { TYPES } from "../../src/dependency-injection/types";
import { DemoService } from "../../src/service/DemoService";

export const mockServices = new ContainerModule((bind: interfaces.Bind) => {
  bind<DeepMockProxy<DemoService>>(TYPES.DemoService).toConstantValue(
    mockDeep<DemoService>()
  );
});
