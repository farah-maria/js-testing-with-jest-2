import swapiGetter from "./swapiGetter.js";
import mockAxios from "axios";
import { async } from "regenerator-runtime";

jest.mock("axios");
mockAxios.get.mockResolvedValue({ data: { name: "Mock Jedi"}})        

describe("swapiGetter", () => {
    afterEach(jest.clearAllMocks); 

    test("should return a name", async () => {
        const result = await swapiGetter(1) //await async or promise-chaining
        expect(result).toBe("Mock Jedi");
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
    });
});