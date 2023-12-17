FROM oven/bun

WORKDIR /app
COPY . .

RUN bun install
RUN bun build:web

CMD [ "bun", "start" ]
