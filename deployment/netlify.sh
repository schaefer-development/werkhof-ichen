#!/usr/bin/env bash
set -e
export BACKEND_URL=http://localhost:1337
yarn run export
cp ../deployment/_redirects ./dist
netlify deploy --dir=dist
