import swapiGetter from "./swapiGetter.js";
import mockAxios from "axios";

describe("swapiGetter", () => {
    test("should return the first entry from the api", () => {
        const result = swapiGetter(1);
        // added for troubleshooting
        console.log(result);
        expect(result).toBe("Luke Skywalker");
    });
});
