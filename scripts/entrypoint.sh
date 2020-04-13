#!/usr/bin/env bash

set -eu

./node_modules/.bin/babel-node --presets @babel/preset-env \
 scripts/gen-feed.js > public/feed.xml
eval "$@"
