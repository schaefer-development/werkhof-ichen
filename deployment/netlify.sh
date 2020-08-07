#!/usr/bin/env bash
set -e
export BACKEND_URL=http://localhost:1337
yarn run export
netlify deploy --dir=dist
