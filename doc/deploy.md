docker compose up postgres

npm run typeorm migration:run

(or npm run typeorm migration:revert)

docker compose up token-price.server

the above doesn't complete jive with kubernetes