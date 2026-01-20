#!/bin/bash
cd /srv/app

echo ">> Running `pnpm install`"
pnpm install

echo ">> Running `pnpm build`"
pnpm build

echo ">> Starting Nuxt"
node ./.output/server/index.mjs
