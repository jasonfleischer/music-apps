#!/bin/bash

# requirements:
# npm, uglifycss, browserify

# $ npm install -g uglifycss
# $ npm install -g uglify-js
# $ npm install -g browserify


uglifycss  css/root.css css/button.css css/alert.css css/header.css css/main.css > css/bundle.css

uglifyjs js/prototypes.js js/information.js js/alert.js js/main.js js/install.js -o js/bundle.js
browserify js/bundle.js -o js/bundle.js
uglifyjs js/bundle.js -o js/bundle.js

git add *; git commit -m 'update'; git push;

echo '-- Finished build.sh for music apps --'