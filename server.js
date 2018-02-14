const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
// const morgan = require('morgan')
// const {sequelize} = require('./models')
// const config = require('./config/config')

// Build an express server
const app = express()
// app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.use(express.static(__dirname + '/client/dist'))
  .get('/', (req, res) => res.render('index'))

// Login request
app.post('/login', (req, res) => {
  for (var i = 0; i < app.userInfo.length; i++) {
    if (req.body.email === app.userInfo[i].email) {
      res.send({
        user: app.userInfo[i].username,
        number: app.userInfo[i].number
      })
      return
    }
  }

  res.send({
    error: 'Your email cannot be found'
  })
})

// Request for updating the number
app.post('/login', (req, res) => {
  for (var i = 0; i < app.userInfo.length; i++) {
    if (req.body.username === app.userInfo[i].username) {
      res.send({
        number: app.userInfo[i].number
      })
      return
    }
  }
  // res.send({
  //   message: 'Sent back from server',
  //   number: app.userInfo.number
  // })
})

// Database
app.userInfo = [{
  username: 'Jinn',
  email: 'jrwang@pnimedia.com',
  number: '01'
},
{
  username: 'Joe',
  email: 'joe@gmail.com',
  number: '02'
},
{
  username: 'John',
  email: 'john@gmail.com',
  number: '03'
}
]

app.listen(process.env.PORT || 8081, function () {
  console.log('server is running')
})

// require('./passport')

// require('./routes')(app)

// sequelize.sync({force: false})
//   .then(() => {
//     app.listen(config.port)
//     console.log(`Server started on port ${config.port}`)
//   })
