// test-setup.js 
const mongoose = require('mongoose')
const app = require('../../src/app'); // Link to your app file (not server)
const supertest = require('supertest');
const request = supertest(app);



mongoose.set('useCreateIndex', true)
mongoose.promise = global.Promise

async function removeAllCollections() {
    const collections = Object.keys(mongoose.connection.collections)
    for (const collectionName of collections) {
        const collection = mongoose.connection.collections[collectionName]
        await collection.deleteMany()
    }
}

async function dropAllCollections() {
    const collections = Object.keys(mongoose.connection.collections)
    for (const collectionName of collections) {
        const collection = mongoose.connection.collections[collectionName]
        try {
            await collection.drop()
        } catch (error) {
            // Sometimes this error happens, but you can safely ignore it
            if (error.message === 'ns not found') return
            // This error occurs when you use it.todo. You can
            // safely ignore this error too
            if (error.message.includes('a background operation is currently running')) return
            console.log(error.message)
        }
    }
}

function setupDB() { //A db name should be sent in order to test with multiples dbs

    
    // Connect to Mongoose
    beforeAll(async () => { // If multiples are being used uses mongoose connect
        // await mongoose.connect(database_uri, {
        //     useNewUrlParser: true
        // })
    })

    // Cleans up database between each test
    afterEach(async () => {
        await removeAllCollections()
    })

    // Disconnect Mongoose
    afterAll(async () => {
        await dropAllCollections()
        await mongoose.disconnect()
    })
}
module.exports = {
    setupDB,
    request,
}