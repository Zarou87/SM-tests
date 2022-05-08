const printTimeCounter = require("./segundero");

describe("segundero", () => {
  test("should the execution be equal to 4 secons, when pass 4 and 1000 as parameters", async () => {
    const expected = 4;
    const result = await printTimeCounter(4, 1000);
    expect(expected).toBe(result);
  });
});
