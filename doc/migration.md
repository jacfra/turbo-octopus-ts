# Generate Migrations

## Prisma

 npx prisma migrate dev

 npx prisma migrate deploy

 npx prisma generate



## Typeorm

### from `./`run 
```
docker compose up postgres
```

### from `./token-price.server` run:

```
export DB_NAME="dbdev" &&
export DB_HOST="localhost" && 
export DB_USERNAME="dbuser" && 
export DB_PASSWORD="dbpassword" && 
export DB_PORT=5433  && 
export DATABASE_URL="postgresql://dbuser:dbpassword@postgres:5433/dbdev?schema=public"
````

(or whatever the current relevant dev variables are)

### then:

```
npm run typeorm migration:generate -- -p -d ./src/database/DataSource.ts  ./src/migration/demo-migration
```

note: typeorm-ts-node-commonjs uses common js and so does tsconfig18