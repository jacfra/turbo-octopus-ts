/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const helloWorld = await prisma.demo.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      value: "Hello, World",
    },
  });
  console.log({ helloWorld });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
