/**
 * Server starting point.
 **/

// Requires
let request = require('request')
let express = require('express')
let bodyParser = require('body-parser')
let app = express()
let port = '4000'

// Middlewares------------------------------------------------------------------------------------------------------

// JSON support
app.use(bodyParser.json())

// HTML form data support
app.use(bodyParser.urlencoded({extended: true}))

// Routes---------------------------------------------------------------------------------------------------------
app.get('/', (req, res) => {
  res.json({message: 'Gateway on main'})
})

app.get('/user-service', (req, res, next) => {
  request({ url: 'http://user:3000/',
    method: 'GET'
  }, (err, response, body) => {
    if (!err && res.statusCode === 200) {
      res.json(body)
    }

    next(err, req, res)
  })
})

app.get('/notification-service', (req, res, next) => {
  request({ url: 'http://notification:3000/',
    method: 'GET'
  }, (err, response, body) => {
    if (!err && res.statusCode === 200) {
      res.json(body)
    }

    next(err, req, res)
  })
})

app.get('/github-service', (req, res, next) => {
  request({ url: 'http://github:3000/',
    method: 'GET'
  }, (err, response, body) => {
    if (!err && res.statusCode === 200) {
      res.json(body)
    }

    next(err, req, res)
  })
})

// Custom Error Responses-------------------------------------------------------------------------------------------------

// 400 >
app.use((req, res) => {
  res.status(302).redirect('/')
})

// 500
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({message: err.message})
})

// Start the server----------------------------------------------------------------------------------------------------
app.listen(port, () => {
  console.log('server up on port ' + port)
})
