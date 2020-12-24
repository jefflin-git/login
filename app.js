// Include packages and define server related variables
const express = require('express')
const app = express()
const port = 3000
//載入express-handlebars
const exphbs = require('express-handlebars')
// 引用 body-parser
const bodyParser = require('body-parser')
// 引用mongoose檔
require('./config/mongoose.js')


// 引用路由器
const routes = require('./routes/index.js')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// 將 request 導入路由器
app.use(routes)

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})