const express = require('express')


const app = express()

app.get('/', (req, res) => {
    res.end('Hello from Hell')
})

app.listen(3000, () => {
    console.log('Hello Express!!!')
})