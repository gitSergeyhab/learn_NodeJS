const rp = require('request-promise')

module.exports = async function(city = '') {
    if(!city) {
        throw new Error('название города не задано')
    }
    
    const KEY = 'fc0aefbd1cdb4db096f3791ebe1a7687'

    const uri = 'https://api.openweathermap.org/data/2.5/weather'
    // const uri = `api.openweathermap.org/data/2.5/weather?q=London&appid={API key}`

    const options = {
        uri,
        qs: {
            appid: KEY,
            q: city,
            // units: 'imperial'
            units: 'metric'
        },
        json: true
    }

    try {
        const data = await rp(options);
        // console.log(data) 
        return {
            // weather: `${data.name}: ${((data.main.temp - 32) *5/9).toFixed(1)}`,
            weather: `${data.name}: ${data.main.temp}`,

            error: null
        }
    } catch(error) {
        return {
            weather: null,
            error: error.error.message
        } 
    }
}