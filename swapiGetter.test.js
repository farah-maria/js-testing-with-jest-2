import swapiGetter from "./swapiGetter.js";
import mockAxios from "axios";
import { async } from "regenerator-runtime";

describe("swapiGetter", () => {
    test("should return a name", async () => {
        const result = await swapiGetter(1)
        console.log(result)
        expect(result).toBe("Luke Skywalker");
    });
});
