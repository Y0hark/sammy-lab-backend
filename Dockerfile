FROM strapi/base

ENV NODE_ENV production

WORKDIR /backend

COPY package.json .

COPY .env .

RUN npm install

COPY favicon.ico .

COPY api/ api/

COPY config/ config/

COPY data/ data/

COPY components/ components/

COPY extensions/ extensions/

RUN npm run build --clean

EXPOSE 1337

CMD ["npm", "start"]