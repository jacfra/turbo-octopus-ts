# multi stage build

######################
#### build stage ####
######################

FROM node:18 as build

WORKDIR /build

# copy files needed for build
COPY package*.json ./
COPY *tsconfig.json ./
COPY /src ./src
COPY /prisma ./prisma

# install and build
RUN npm install

# generate prisma client
RUN npm run generate

# build the application
RUN npm run build

# ######################
# #### deploy stage ####
# ######################

FROM node:18 as deploy

WORKDIR /app

# copy files needed to start production server
COPY --from=build /build/prisma ./prisma
COPY --from=build /build/package*.json ./
COPY --from=build /build/node_modules ./node_modules
COPY --from=build /build/dist ./dist

# Script to wait for database to come online
COPY ./wait-for-it.sh ./

# just enables wait-for-it.sh
RUN chmod +x ./wait-for-it.sh

