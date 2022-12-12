import { search } from "../index";
import { searchMocks } from "./__mocks__/mocks";

describe("search", () => {
  it("should return the results of the search string", async () => {
    for (const mock of searchMocks) {
      if (mock.sqlResult !== undefined) {
        const result = await search(mock.search);
        expect(result).toEqual(mock.sqlResult);
      }
    }

    const numAssertionsExpected = searchMocks.filter(
      (sm) => sm.sqlResult !== undefined
    ).length;

    console.log(`numAssertionsExpected: ${numAssertionsExpected}`);

    expect(numAssertionsExpected).toBeGreaterThan(0);
    expect.assertions(numAssertionsExpected + 1); // because we checked it in the loop and once after the loop
  });
});
