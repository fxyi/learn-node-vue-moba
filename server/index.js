const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

require('./plugins/db')(app)
require('./routes/admin')(app)

app.listen(3000, () => {
    console.log('listening 3000 port ...')
})