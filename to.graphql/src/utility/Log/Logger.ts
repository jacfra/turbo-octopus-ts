import { configure, getLogger } from "log4js";
import { logConfiguration } from "./LoggerConfiguration";

export interface ILogger {
  trace(message: any, ...args: any[]): void;
  debug(message: any, ...args: any[]): void;
  info(message: any, ...args: any[]): void;
  warn(message: any, ...args: any[]): void;
  error(message: any, ...args: any[]): void;
  fatal(message: any, ...args: any[]): void;
  
}

configure(logConfiguration);

let log4jsLogger = getLogger();

export const Log: ILogger = {
  trace: log4jsLogger.trace,
  debug: log4jsLogger.debug,
  info: log4jsLogger.info,
  warn: log4jsLogger.warn,
  error: log4jsLogger.error,
  fatal: log4jsLogger.fatal,
  
};
