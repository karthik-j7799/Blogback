const express = require('express')

const app = express()

app.use(express.static(`${__dirname}/upload`));

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const cors = require('cors')
app.use(cors())


const router = require('./Routes')

app.use('/',router)

const db= require('./dbConnection')




app.listen(3000, ()=>{
    console.log("Server Started")
})






