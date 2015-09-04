tldr; I am new to node, so this is amateur hour!

This is an attempt to put together a starting point for doing web
development with Node. The way I use this is I clone it from github,
delete the .git file, push to a new git repository, and voila.

The focus of this is to use om/clojurescript like development for
Node. In this vein, I use Immutable for all data. I also really like
the idea of a reducer as put forth by Redux and so I include that as
well; this gives you a place where all `state + event => state`
can be centralized. This feels right. Finally, Karma is pretty good at
running your test on save, that is convenient.



COMMANDS: (Run `npm install` to locally install all the below commands)

DEVELOPMENT: I run three commands

`npm run watchify-test` -- keeps rebuilding main.js and test.js into bundled-test.js

`npm test` -- Starts the Karma test runner

`npm start` -- Starts the development server at port 6060, so I can inspect myself


PRODUCTION: I use the following:

`npm browserify` -- converts main.js into a bundled.js form

