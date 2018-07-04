const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./routes')

const api = express()

api.use(cors())
api.use(bodyParser.json())
api.use(router)

api.listen(4444, '0.0.0.0', () => {
  console.info('API is listening on http://localhost:4444')
})
