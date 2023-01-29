import { Container } from "inversify";
import { CONTAINER_MODULES } from "./container-modules";

const container = new Container();

container.load(...CONTAINER_MODULES);

export { container };
