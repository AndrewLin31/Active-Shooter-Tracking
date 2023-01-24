FROM node:16-alpine
RUN mkdir -p /usr/app/
WORKDIR /usr/app

COPY ./pages ./
COPY ./public/playground_assets ./
COPY ./ ./
RUN npm install

RUN npm run dev

CMD ["npm", "start"]
EXPOSE 5000