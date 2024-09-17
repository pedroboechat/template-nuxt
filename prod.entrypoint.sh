#!/bin/bash
cd /srv/app

echo ">> Running `yarn install`"
yarn install

echo ">> Running `yarn build`"
yarn build

echo ">> Starting Nuxt"
node ./.output/server/index.mjs
