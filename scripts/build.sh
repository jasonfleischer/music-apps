#!/bin/bash

# requirements:
# npm, uglifycss, browserify

# $ npm install -g uglifycss
# $ npm install -g uglify-js
# $ npm install -g browserify

CWD=`pwd`

npm update;

uglifycss css/alert.css css/header.css css/main.css css/root.css > css/bundle.css

uglifyjs js/prototypes.js js/alert.js js/main.js js/install.js service_worker.js -o js/bundle.js
browserify js/bundle.js -o js/bundle.js
uglifyjs js/bundle.js -o js/bundle.js

git add *; git commit -m 'update'; git push;


cd $CWD