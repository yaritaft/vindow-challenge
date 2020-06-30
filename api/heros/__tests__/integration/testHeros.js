const Helper = require("../helpers/herosHelpers");
const helper = new Helper();
const urlPrefix = "/api";

    test("Consuming API endpoint", async () => {
        const { body } = await helper.apiServer.get(`${urlPrefix}/get`)
        expect(body).toHaveProperty("heros");
    });