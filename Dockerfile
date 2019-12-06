# FROM nginx:1.17.1-alpine
# COPY /dist/front /usr/share/nginx/html

### STAGE 1: Build ###
FROM node:12.7-alpine AS build

RUN mkdir /app
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build
### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
RUN --publish 8080:80 nginx
COPY --from=build /app/dist/front /usr/share/nginx/html