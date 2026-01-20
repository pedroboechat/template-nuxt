#!/bin/bash
cd /srv/app

echo ">> Running `pnpm install`"
pnpm install

echo ">> Starting Nuxt"
pnpm dev
