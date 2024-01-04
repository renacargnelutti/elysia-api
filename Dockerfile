FROM oven/bun as development

WORKDIR /usr/src/app

COPY package*.json bun.lockb ./
RUN bun install
COPY . .

CMD ["bun", "run", "dev"]
