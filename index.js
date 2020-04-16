const express = require('express')
const teams = require('./teams')

const app = express()

app.get('/teams', (request, response) => {
  return response.send(teams)
})

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening to port 3000...')
})

