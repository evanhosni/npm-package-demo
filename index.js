const express = require('express')
const app = express()
const port = 3001

const path = require('path')

const nodeyourmeme = require('nodeyourmeme');
const meme = require('node-meme');

app.get('/', function (req, res) {
//   res.send('Hello World')
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/meme', function (req, res) {
    nodeyourmeme.random().then(data => {
        // console.log(data.name)
        meme.requestmeme(data.name).then(img => {
            console.log(img)
            res.send(`Hellooooo Borld <img alt="${data.name}" src="${img.url}"/>`)
        })
    }).catch(console.error);


})

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})