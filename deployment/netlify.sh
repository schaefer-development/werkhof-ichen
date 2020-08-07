#!/usr/bin/env bash
set -e
export BACKEND_URL=https://josen.uber.space
yarn run export
cp ../deployment/_redirects ./dist
netlify deploy --dir=dist/ --prod
