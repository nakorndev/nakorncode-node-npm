// const say = require('./_say.js')

const cowsay = require('cowsay') // node_modules/cowsay/package.json <-- "main" <-- .js

const message = cowsay.think({ text: 'Hello cow!' })

console.log(message)
