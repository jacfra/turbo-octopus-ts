import { PrismaClient } from "@prisma/client";

// create the DATABASE_URL

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const databse = process.env.DB_NAME;

const url = `postgresql://${username}:${password}@${host}:${port}/${databse}?schema=public`;

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
export const dataSource = new PrismaClient({
    datasources: {
        db: {
            url,
        },
    },
});
