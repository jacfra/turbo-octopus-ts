/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import "reflect-metadata";
import { PrismaClient } from "@prisma/client";
import { inject, injectable } from "inversify";
import { TYPES } from "../dependency-injection/types";
import { Demo } from "@generated/type-graphql";

@injectable()
export class DemoService {
  constructor(
    @inject(TYPES.DataSource)
    private dataSource: PrismaClient
  ) {}
  async demo(): Promise<Demo[]> {
    return await this.dataSource.demo.findMany();
  }
}
