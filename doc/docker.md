run container indefintely for debugging

`tail -F anything`

multiple compose files

`docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d`

buid without cache

`docker compose build gql --no-cache`
