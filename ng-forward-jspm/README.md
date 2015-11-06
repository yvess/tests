# ng-forward-jspm test

ng-forward seems to be broken with jspm in alpha.7, it worked with alpha.4

error: `Error: View is not a function`

## install

to checkout only this folder and not the whole repro, do
`svn checkout https://github.com/yvess/tests/trunk/ng-forward-jspm`

npm: `npm install`
jspm: `$(npm bin)/jspm install`

## run http server

run http: `$(npm bin)/http-server`

## works with older alpha

install old alpha: `$(npm bin)/jspm install npm:ng-forward@0.0.1-alpha.4`

