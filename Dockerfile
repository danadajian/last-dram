FROM oven/bun

WORKDIR /app
COPY . .

RUN bun install --production
RUN bun build:web

ENV API_URL "http://localhost:3000"
CMD [ "bun", "start" ]
