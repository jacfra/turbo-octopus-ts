/* eslint-disable @typescript-eslint/unbound-method */
import { ContainerModule, interfaces } from "inversify";
import { DemoResolver } from "../../resolver/DemoResolver";

export const resolvers = new ContainerModule((bind: interfaces.Bind) => {
  bind<DemoResolver>(DemoResolver).to(DemoResolver);
});
