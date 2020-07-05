const Helper = require("../helpers/setup");

let helper = new Helper();
const urlPrefix = "/api/heros";
describe('Get Endpoints', () => {
    it("Consuming GET API endpoint", async () => {
        const { body } = await helper.apiServer.get(`${urlPrefix}/`)
        console.log(body)
        expect(body).toHaveProperty("heros");
    })
})

describe('Get Endpoints', () => {
    it("Consuming GET API endpoint", async () => {
        const { body } = await helper.apiServer.get(`${urlPrefix}/`)
        console.log(body)
        // expect(body).toHaveProperty("heros");
    })
})

// describe('Post Endpoint', () => {
//     it("Consuming POST API endpoint", async () => {
//         const { body } = await helper.apiServer.get(`${urlPrefix}/`)
//         // let { body } = await helper.apiServer.get(`${urlPrefix}/`)
//         expect(body).toHaveProperty("heros");
//         // expect(status) == 200;
//     })
// })