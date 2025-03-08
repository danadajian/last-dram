FROM oven/bun

WORKDIR /app
COPY . .

RUN bun install --production
ENV PORT=3000
CMD [ "bun", "start" ]
