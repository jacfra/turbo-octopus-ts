/* eslint-disable @typescript-eslint/unbound-method */
import { PrismaClient } from "@prisma/client";
import { Container } from "inversify";
import { DeepMockProxy } from "jest-mock-extended";
import { services } from "../../src/dependency-injection/container-modules/service";
import { TYPES } from "../../src/dependency-injection/types";
import { DemoService } from "../../src/service/DemoService";
import { mockDatasource } from "../container-module/datasource.mock";

describe("DemoService", () => {
  let container: Container;

  beforeEach(() => {
    container = new Container();
    container.load(services, mockDatasource);
  });

  it("Unit Test", async () => {
    const demoService = await container.getAsync<DemoService>(
      TYPES.DemoService
    );
    await demoService.demo();

    const mockDatasource: DeepMockProxy<PrismaClient> =
      await container.getAsync(TYPES.DataSource);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    expect(mockDatasource.demo.findMany).toHaveBeenCalled();
  });
});
