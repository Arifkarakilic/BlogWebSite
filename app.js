const exphbs = require('express-handlebars')
const express = require('express')
const app = express()
const port = 3000
const hostname = '127.0.0.1'
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const FileUpload = require('./node_modules/express-fileupload/lib/index')
const generateDate = require('./helpers/generateDate').generateDate

mongoose.connect('mongodb://127.0.0.1/nodeblog')

app.use(FileUpload())

app.use(express.static('public'))//middleware



app.engine('handlebars', exphbs.engine({helpers:{generateDate:generateDate}}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


const main = require('./routes/main')
const posts = require('./routes/posts')
const users = require('./routes/users')
app.use('/',main)
app.use('/posts',posts)
app.use('/users',users)


app.listen(port, hostname, () => {
    console.log(`Example app listening on port  http://${hostname}:${port}`)
})