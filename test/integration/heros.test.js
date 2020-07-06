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

describe("Post Endpoints", () => {
  it("Post the test endpoint", async (done) => {
    // Sends GET Request to /test endpoint
    const res = await request.post(`${urlPrefix}/`)
    .send({ name: 'Manny', description: 'cat' })
    .set('Accept', 'application/json')
    const resGet = await request.get(`${urlPrefix}/`);
    expect(res.status).toBe(200);
    expect(resGet.body.heros[0]).toMatchObject({'name': 'Manny', 'description': 'cat'});
    done();
  });
});

describe("Get individual Endpoints", () => {
  it("Get individual the test endpoint", async (done) => {
    // Sends GET Request to /test endpoint
    const res = await request.post(`${urlPrefix}/`)
    .send({ name: 'Manny', description: 'cat' })
    .set('Accept', 'application/json')
    const resGet = await request.get(`${urlPrefix}/`);
    id_hero = resGet.body.heros[0]._id
    const resIndividualGet = await request.get(`${urlPrefix}/${id_hero}`);
    expect(resIndividualGet.body.hero[0]).toMatchObject({'name': 'Manny', 'description': 'cat'});
    expect(resIndividualGet.body).toHaveProperty('hero');
    expect(resIndividualGet.status).toBe(200);
    done();
  });
});

describe("Delete Endpoints", () => {
  it("Delete the test endpoint", async (done) => {
    // Sends GET Request to /test endpoint
    await request.post(`${urlPrefix}/`)
    .send({ name: 'Manny', description: 'cat' })
    .set('Accept', 'application/json')
    const resGet = await request.get(`${urlPrefix}/`);
    id_hero = resGet.body.heros[0]._id
    const resDelete = await request.delete(`${urlPrefix}/${id_hero}`);
    expect(resDelete.status).toBe(200);
    done();
  });
});

describe("Put Endpoints", () => {
  it("Put the test endpoint", async (done) => {
    // Sends GET Request to /test endpoint
    await request.post(`${urlPrefix}/`)
    .send({ name: 'Manny', description: 'cat' })
    .set('Accept', 'application/json')
    const resGet = await request.get(`${urlPrefix}/`);
    id_hero = resGet.body.heros[0]._id
    const resPut = await request.put(`${urlPrefix}/${id_hero}`)
    .send({name: "BATMAN2", description: "BATMA22"})
    .set('Accept', 'application/json')
    expect(resPut.status).toBe(200);
    const resIndividualGet = await request.get(`${urlPrefix}/${id_hero}`);
    expect(resIndividualGet.body.hero[0]).toMatchObject({"name": "BATMAN2", "description": "BATMA22"});
    done();
  });
});