const Helper = require("../helpers/setup");
const helper = new Helper();
const urlPrefix = "/api/heros";
describe('Post Endpoints', () => {
    it("Consuming API endpoint", async () => {
        const { body } = await helper.apiServer.get(`${urlPrefix}/get`)
        expect(body).toHaveProperty("heros");
    })
})