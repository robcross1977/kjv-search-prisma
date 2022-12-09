import { searchMocks } from "./__mocks__/mocks";
import { toPrisma } from "../searches-to-prisma";

describe("string-to-searches", () => {
  it("should return an equivalent prisma query object for each search passed to it", () => {
    searchMocks.forEach((v) => {
      if (v && v.prismaObj && v.searchObj) {
        // arrange
        const expected = Array.isArray(v.prismaObj)
          ? [...v.prismaObj]
          : [v.prismaObj];

        // act
        const result = toPrisma([v.searchObj]);

        console.log(JSON.stringify(result));
        // assert
        expect(result).toEqual(expected);
      }
    });
  });
});
