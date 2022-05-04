#!/usr/bin/env bash
webpack --config ./config/webpack/webpack.config.prod.js
cp ./src/gif/gif.worker.js ./build/public/static/gif.worker.js
cp -a ./src/public/. ./build/public/static/
cp ./src/landing/index.html ./build/public/landing.html
cp -a ./src/landing/css/. ./build/public/static/
