#!/bin/bash
cd /srv/app

echo ">> Running `yarn install`"
yarn install

echo ">> Starting Nuxt"
yarn dev
