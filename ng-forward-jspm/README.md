# ng-forward-jspm test

## install

to checkout only this folder and not the whole repro, do
`svn checkout https://github.com/yvess/tests/trunk/ng-forward-jspm`

npm: `npm install`
jspm: `$(npm bin)/jspm install`

## run http server

run http: `$(npm bin)/http-server`

## create build

with: `$(npm bin)/jspm bundle index.js + core-js --minify --skip-source-maps`

build is on: `http://localhost:8080/build.html`

Note: You can run `build.html` also only with `npm install http-server`
