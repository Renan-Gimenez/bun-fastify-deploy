FROM oven/bun:1-alpine

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install

COPY . .

ENV NODE_ENV=development

RUN bun install

CMD ["bun", "run", "src/server.ts"]
