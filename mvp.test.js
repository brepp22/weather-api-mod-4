const { screen, fireEvent, within } = require('@testing-library/dom')
require('@testing-library/jest-dom')
const { server } = require('./backend/mock')
const { moduleProject4 } = require('./frontend/index')

const waitForOptions = { timeout: 150 } // so Codegrade does not take forever

beforeAll(() => { server.listen() })
afterAll(() => { server.close() })
beforeEach(async () => {
  document.querySelector('body').innerHTML = `
  <header>
    <h1>Sprint 5 Module 4 Project</h1>
    <h2>Weather API</h2>
    <p class="info"></p>
  </header>
  <section>
    <select id="citySelect">
      <option selected disabled hidden>Select a city...</option>
      <option>San Francisco</option>
      <option>New York</option>
      <option>Detroit</option>
      <option>Honolulu</option>
    </select>
    <div id="weatherWidget">
      <div id="today" class="card col">
        <div id="apparentTemp" class="col">
          <div>Feels like</div>
          <div>99°</div>
        </div>
        <div class="row">
          <div id="todayDescription">🌤</div>
          <div id="todayStats" class="col">
            <div>99°/99°</div>
            <div>Precipitation: 99%</div>
            <div>Humidity: 99%</div>
            <div>Wind: 9m/s</div>
          </div>
        </div>
      </div>
      <div id="forecast" class="row">
        <div class="next-day card col">
          <div>Monday</div>
          <div>🌤</div>
          <div>99°/99°</div>
          <div>Precipitation 99%</div>
        </div>
        <div class="next-day card col">
          <div>Tuesday</div>
          <div>🌤</div>
          <div>99°/99°</div>
          <div>Precipitation 99%</div>
        </div>
        <div class="next-day card col">
          <div>Wednesday</div>
          <div>🌤</div>
          <div>99°/99°</div>
          <div>Precipitation 99%</div>
        </div>
      </div>
      <div id="location" class="col">
        <div>Detroit</div>
        <div>United States</div>
      </div>
    </div>
  </section>
  <footer></footer>`
  await moduleProject4()
})

describe('Module 4 Project', () => {
  test('👉 [1] div#weatherWidget not visible on first render', () => {
    expect(screen.queryByText('Feels like')).not.toBeVisible()
  })

  test('👉 [2] p.info displays the correct messages', async () => {
    // at first the paragraph.info is empty
    expect(document.querySelector('.info').textContent).toBe('')
    const select = document.querySelector('select')
    fireEvent.change(select, { target: { value: 'Honolulu' } })
    // once the request has been launched we see message
    screen.getByText('Fetching weather data...')
    const today = document.querySelector('#today')
    await within(today).findByText('84°', {}, waitForOptions)
    // after success the paragraph.info goes back to empty
    expect(document.querySelector('.info').textContent).toBe('')
  })

  test('👉 [3] div#weatherWidget renders the correct data for Honolulu', async () => {
    const select = document.querySelector('select')
    fireEvent.change(select, { target: { value: 'Honolulu' } })
    // today
    const today = document.querySelector('#today')
    await within(today).findByText('84°', {}, waitForOptions)
    within(today).getByText('☀️')
    within(today).getByText('75°/84°')
    within(today).getByText('Precipitation: 10%')
    within(today).getByText('Humidity: 65%')
    within(today).getByText('Wind: 10m/s')
    // forecast 1
    const forecast = document.querySelector('#forecast')
    within(forecast.children[0]).getByText('Thursday')
    within(forecast.children[0]).getByText('☀️')
    within(forecast.children[0]).getByText('75°/84°')
    within(forecast.children[0]).getByText('Precipitation: 10%')
    // forecast 2
    within(forecast.children[1]).getByText('Friday')
    within(forecast.children[1]).getByText('⛅️')
    within(forecast.children[1]).getByText('77°/85°')
    within(forecast.children[1]).getByText('Precipitation: 40%')
    // forecast 3
    within(forecast.children[2]).getByText('Saturday')
    within(forecast.children[2]).getByText('🌧️')
    within(forecast.children[2]).getByText('72°/80°')
    within(forecast.children[2]).getByText('Precipitation: 80%')
    // location
    const location = document.querySelector('#location')
    within(location).getByText('Honolulu')
  })

  test('👉 [4] div#weatherWidget renders the correct data for New York', async () => {
    const select = document.querySelector('select')
    fireEvent.change(select, { target: { value: 'New York' } })
    // today
    const today = document.querySelector('#today')
    await within(today).findByText('68°', {}, waitForOptions)
    within(today).getByText('⛅️')
    within(today).getByText('61°/78°')
    within(today).getByText('Precipitation: 20%')
    within(today).getByText('Humidity: 62%')
    within(today).getByText('Wind: 8m/s')
    // forecast 1
    const forecast = document.querySelector('#forecast')
    within(forecast.children[0]).getByText('Thursday')
    within(forecast.children[0]).getByText('☀️')
    within(forecast.children[0]).getByText('73°/85°')
    within(forecast.children[0]).getByText('Precipitation: 20%')
    // forecast 2
    within(forecast.children[1]).getByText('Friday')
    within(forecast.children[1]).getByText('☀️')
    within(forecast.children[1]).getByText('67°/78°')
    within(forecast.children[1]).getByText('Precipitation: 10%')
    // forecast 3
    within(forecast.children[2]).getByText('Saturday')
    within(forecast.children[2]).getByText('⛅️')
    within(forecast.children[2]).getByText('62°/75°')
    within(forecast.children[2]).getByText('Precipitation: 30%')
    // location
    const location = document.querySelector('#location')
    within(location).getByText('New York')
  })
})
