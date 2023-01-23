FROM node:16.19-slim

WORKDIR /usr/share/app
COPY . .

ARG AWS_REGION
ARG AWS_USER_POOL_ID
ARG AWS_USER_POOL_CLIENT_ID
ENV NODE_ENV "production"
ENV PORT 8080

RUN npm ci
RUN npm run build:web

CMD [ "npm", "run", "start:server" ]
