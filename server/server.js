const express = require('express')
const path = require('path')

const fruitRoutes = require('./routes/fruits')
const albumRoutes = require('./routes/albumRoutes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/fruits', fruitRoutes)
server.use('/api/v1/album', albumRoutes)

// server.get('*', (req, res) => {
//   res.sendFile(path.resolve('server/public/index.html'))
// })

// Get the absolute path to the directory where your script is located
const scriptDir = path.dirname(process.argv[1])

// Construct the absolute path to 'index.html'
const indexPath = path.resolve(scriptDir, 'public', 'index.html')

server.get('*', (req, res) => {
  res.sendFile(indexPath)
})

module.exports = server
