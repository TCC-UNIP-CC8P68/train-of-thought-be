FROM node:14

EXPOSE 3001

COPY ./src /app

WORKDIR /app

RUN npm install i npm@latest -g 

RUN npm install

CMD ["node", "server.js"]
