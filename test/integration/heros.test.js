const { setupDB, request } = require("../helpers/setup");
const urlPrefix = "/api/heros";

setupDB() //A db name should be sent in order to test with multiples dbs

describe("Get Endpoints", () => {
  it("Gets the test endpoint", async (done) => {
    // Sends GET Request to /test endpoint
    const res = await request.get(`${urlPrefix}/`);
    expect(res.body.heros).toStrictEqual([]);
    expect(res.status).toBe(200);
    done();
  });
});
