FROM node:18-alpine

WORKDIR /app

COPY  ./package.json /app/
COPY  ./package-lock.json /app/

RUN npm install

COPY ./ /app/

ENTRYPOINT ["npm", "run", "dev"]

