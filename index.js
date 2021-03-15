const express = require('express')
const bodyParser = require('body-parser')
const weatherRequest = require('./requests/weather.request')

const app = express()
// fc0aefbd1cdb4db096f3791ebe1a7687 - API ключ с https://home.openweathermap.org/api_keys

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('index', {weather: null, error: null})
})

app.post('/', async (req, res) => {
    const {city} = req.body
    console.log(req)
    const {weather, error} = await weatherRequest(city)
    // console.log(`
    //     Weather: ${weather};
    //     Error: ${error}.
    //     `)
    res.render('index', {weather, error})
})

app.listen(3000, () => {
    // console.log('Hello Express!!!!!')
})