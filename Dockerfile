FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm build

CMD [ "node", "./build/server.js"]