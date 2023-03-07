import { server } from "../src/server"
import supertest from "supertest"

describe("End point test example", () => {
    afterEach(async () => {
        server.close()
    })

    it("get to / returns 200", () => {
        supertest(server).get("/")
            .expect("Content-Type", "text/html; charset=utf-8")
            .expect(200)
    })
})