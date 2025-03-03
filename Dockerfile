FROM oven/bun

WORKDIR /app
COPY . .

RUN bun install --production
CMD [ "bun", "start" ]
