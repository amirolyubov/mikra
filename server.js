const express = require('express')
const app = express()

const mikraDb = require('./server/db.js')

app.use(express.static('dist'))

mikraDb.init()

app.get('/', (req, res) => res.sendfile(__dirname + '/dist/index.html'))

app.listen(3000, () => console.log('Mikra app listening on port 3000!'))
