module.exports = {
    PORT: process.env.APP_PORT,
    DB: `mongodb://myuser:mypassword@localhost:27017/${process.env.TEST_SUITE}`// process.env.DATABASE_URL
}