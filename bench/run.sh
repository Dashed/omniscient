#!/usr/bin/env bash

# http://unix.stackexchange.com/a/4529/57576
# node benchmark.js | perl -pe 's/\e\[?.*?[\@-~]//g' > results.md

cd ../
node makeBundle.js
cd bench/
node benchmark.js | perl -pe 's/\e\[?.*?[\@-~]//g' > current_vs_pr.md
node benchmark-old.js | perl -pe 's/\e\[?.*?[\@-~]//g' > current_vs_old.md
