const { rest } = require('msw')
const { setupServer } = require('msw/node')
const { getWeather } = require('./data')

function endpoint(req, res, ctx) {
  let city = req.url.searchParams.get('city')
  let cityToUse = city || 'San Francisco'
  let weather = getWeather(cityToUse)
  if (weather) {
    return res(
      ctx.json(weather),
    )
  }
  return res(
    ctx.status(404),
    ctx.json({
      message: `Sorry, no weather information for ${city}. Check the spelling of city name.`,
    }),
  )
}

const handlers = [
  rest.get('http://localhost:3003/api/weather', endpoint),
  rest.get('/api/weather', endpoint),
]

module.exports = {
  server: setupServer(...handlers),
}
