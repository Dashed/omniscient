#!/usr/bin/env bash

# http://unix.stackexchange.com/a/4529/57576
node benchmark.js | perl -pe 's/\e\[?.*?[\@-~]//g' > results.md
