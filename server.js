const properties = require('./config/properties')
const db = require('./config/database')
const app = require('./app.js')

db();

app.use((err, req, res, next)=>{
    res.status(500).json(err.message)
})
app.listen(properties.PORT, (req, res) => {
    console.log('Server up and running.')
})
module.exports = app