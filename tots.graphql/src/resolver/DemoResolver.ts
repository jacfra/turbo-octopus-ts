/* eslint-disable @typescript-eslint/no-unsafe-return */
import "reflect-metadata";
import { inject, injectable } from "inversify";
import { Resolver, Query } from "type-graphql";
import { TYPES } from "../dependency-injection/types";
import { DemoService } from "../service/DemoService";
import { Demo } from "@generated/type-graphql";

@Resolver()
@injectable()
export class DemoResolver {
  constructor(
    @inject(TYPES.DemoService)
    private demoService: DemoService
  ) {}

  @Query(() => [Demo])
  async demo(): Promise<Demo[]> {
    return await this.demoService.demo();
  }
}
