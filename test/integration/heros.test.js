const request = require("../helpers/setup");
const urlPrefix = "/api/heros";

const mongoose = require('mongoose');
const {herosSchema} = require('../../src/api/heros/herosModels')



function clearDB(done) {
    console.log("hola")
    // for (var i in mongoose.connection.collections) {
    //   await mongoose.connection.collections[i].remove(function () {});
    // }
  }
beforeEach(async (done)  =>{
if (mongoose.connection.readyState === 0) {
    await mongoose.connect(
      `mongodb://localhost:27017/${process.env.TEST_SUITE}`, // <------- IMPORTANT
      function (err) {
        if (err) {
          throw err;
        }
        console.log("ERASE DATABASE")
        done()
      }
    );
  } else {
    console.log("ERASE DATABASE")
    done()
  }
});

afterEach(async (done) => {
    console.log("ERASE DATABASE")
    done()
  });

  afterAll(async (done) => {
    await mongoose.disconnect();
    return done();
  });

describe('Get Endpoints', () => {
it('Gets the test endpoint', async done => {
    // Sends GET Request to /test endpoint
    const res = await request.get(`${urlPrefix}/`)
    expect(res.status).toBe(200)
    console.log(res.body)
    console.log(res.body.heros)
    expect(res.body.heros).toStrictEqual([])
    done()
  })
})

describe('Get Endpoints', () => {
    it('Gets the test endpoint', async done => {
        // Sends GET Request to /test endpoint
        const res = await request.get(`${urlPrefix}/`)
        expect(res.status).toBe(200)
        expect(res.body.heros).toStrictEqual([])
        done()
      })
    })