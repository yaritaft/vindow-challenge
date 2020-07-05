const properties = require('./config/properties')
const app = require('./app.js')

// Error Handler
app.use(require("./middlewares/errorHandler"));
app.listen(properties.PORT, (req, res) => {
    console.log('Server up and running.')
})
module.exports = app