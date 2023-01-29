/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/unbound-method */
import { Container } from "inversify";
import { MockProxy } from "jest-mock-extended";
import { resolvers } from "../../src/dependency-injection/container-modules/resolver";
import { TYPES } from "../../src/dependency-injection/types";
import { DemoResolver } from "../../src/resolver/DemoResolver";
import { DemoService } from "../../src/service/DemoService";
import { mockServices } from "../container-module/service.mock";

describe("DemoResolver", () => {
  let container: Container;

  beforeEach(() => {
    container = new Container();
    container.load(resolvers, mockServices);
  });

  it("Unit Test", async () => {
    const demoResolver = await container.getAsync<DemoResolver>(DemoResolver);
    await demoResolver.demo();

    const mockDemoService: MockProxy<DemoService> = await container.getAsync(
      TYPES.DemoService
    );
    expect(mockDemoService.demo).toHaveBeenCalled();
  });
});
