const mongoose = require('mongoose');

const supertest = require("supertest");
const app = require("../../src/app");
class Helper {
  constructor(model) {
    this.apiServer = supertest(app);
  }
}


// Load models since we will not be instantiating our express server.

beforeEach(async (done)  =>{
  /*
    Define clearDB function that will loop through all 
    the collections in our mongoose connection and drop them.
  */
 console.log(mongoose)
  function clearDB() {
    console.log("hola")
    // for (var i in mongoose.connection.collections) {
    //   await mongoose.connection.collections[i].remove(function () {});
    // }
    return done();
  }

  /*
    If the mongoose connection is closed, 
    start it up using the test url and database name
    provided by the node runtime ENV
  */
 console.log(mongoose.connection.readyState)
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(
      `mongodb://localhost:27017/${process.env.TEST_SUITE}`, // <------- IMPORTANT
      function (err) {
        if (err) {
          throw err;
        }
        return clearDB();
      }
    );
  } else {
    return clearDB();
  }
});

afterEach(async () => {
  await clearDB();
});

afterAll((done) => {
  await mongoose.disconnect();
  return done();
});
module.exports = Helper;