import { getSearches } from '../string-to-searches';

describe('string-to-searches', () => {
    describe('book', () => {
      it('should return a search that looks for only a book if only a single word is provided (no chapters, no verses)', () => {
        // arrange
        const search = "Genesis";
        const expected = [{
            name: search,
            chapters: [],
        }]

          // act
          const result = getSearches(search);

          // assert
          expect(result).toEqual(expected);
      });
    });
});