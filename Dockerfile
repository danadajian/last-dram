FROM oven/bun

WORKDIR /app
COPY . .

RUN bun install --production
RUN bun build:web

CMD [ "bun", "start" ]
