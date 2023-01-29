# https://github.com/tiangolo/node-frontend

# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:18 as build-stage

# Puppeteer dependencies, from: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#running-puppeteer-in-docker


# actual app logic above is for testing

WORKDIR /app

COPY package*.json ./
COPY *tsconfig.json ./
COPY /src ./src
COPY /public ./public

RUN npm install

# Puppeteer dependencies, from: https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#running-puppeteer-in-docker

# Install latest chrome dev package and fonts to support major charsets (Chinese, Japanese, Arabic, Hebrew, Thai and a few others)
# Note: this installs the necessary libs to make the bundled version of Chromium that Puppeteer
# installs, work.

# RUN apt-get update && apt-get install -y wget --no-install-recommends \
#     && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
#     && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
#     && apt-get update \
#     && apt-get install -y google-chrome-unstable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst ttf-freefont \
#     --no-install-recommends \
#     && rm -rf /var/lib/apt/lists/* \
#     && apt-get purge --auto-remove -y curl \
#     && rm -rf /src/*.deb

# RUN npm install puppeteer

# RUN npm run test -- --browsers ChromeHeadlessNoSandbox --watch=false

ARG configuration=production
RUN npm run build


# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15

COPY --from=build-stage /app/build/ /usr/share/nginx/html

COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf