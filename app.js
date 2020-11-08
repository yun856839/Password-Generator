// require related modules used in the project
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

// set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`The Express server is running on http://localhost:3000`)
})