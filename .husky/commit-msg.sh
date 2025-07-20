#!/usr/bin/env sh
. "$(dirname "$0")/_/husky.sh"

yarn ts-node --esm ./commitlint.config.ts --edit "$1"
