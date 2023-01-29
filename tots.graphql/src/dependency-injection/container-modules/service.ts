import { ContainerModule, interfaces } from "inversify";
import { TYPES } from "../types";
import { DemoService } from "../../service/DemoService";

export const services = new ContainerModule((bind: interfaces.Bind) => {
  bind<DemoService>(TYPES.DemoService).to(DemoService);
});
