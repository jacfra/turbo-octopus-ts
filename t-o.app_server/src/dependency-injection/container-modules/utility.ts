import { ContainerModule, interfaces } from "inversify";
import { TYPES } from "../types";
import { ILogger, Log } from "../../utility/Log/Logger";

export const utilities = new ContainerModule((bind: interfaces.Bind) => {
  bind<ILogger>(TYPES.Logger).toConstantValue(Log);
});
