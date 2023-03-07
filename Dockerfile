FROM node:16

WORKDIR /app

COPY package*.json .

RUN apt-get update
RUN apt-get install lsof
RUN npm install

COPY . .

ARG EnvironmentVariable
