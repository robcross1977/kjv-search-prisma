import { getSearches } from "../string-to-searches";
import { Book } from "../types";

describe("string-to-searches", () => {
  it("should return an equivalent search object for each search passed to it", () => {
    // arrange
    // Just add what you want to search for as a new key, and the expected return value as the value
    const searches: Record<string, Book> = {
      Genesis: {
        name: "Genesis",
        chapters: [],
      },
      "1John": {
        name: "1 John",
        chapters: [],
      },
      "Song Of Solomon": {
        name: "Song Of Solomon",
        chapters: [],
      },
      "Genesis 1": {
        name: "Genesis",
        chapters: [{ number: 1, verses: [] }],
      },
      "1John11": {
        name: "1 John",
        chapters: [
          {
            number: 11,
            verses: [],
          },
        ],
      },
      "Song of Solomon 111": {
        name: "Song of Solomon",
        chapters: [
          {
            number: 111,
            verses: [],
          },
        ],
      },
      "Genesis 1:1": {
        name: "Genesis",
        chapters: [
          {
            number: 1,
            verses: [{ number: 1 }],
          },
        ],
      },
      "1 John 11:11": {
        name: "1 John",
        chapters: [
          {
            number: 11,
            verses: [{ number: 11 }],
          },
        ],
      },
      "Song Of Solomon 111:111": {
        name: "Song Of Solomon",
        chapters: [
          {
            number: 111,
            verses: [{ number: 111 }],
          },
        ],
      },
      "Genesis 1-3": {
        name: "Genesis",
        chapters: [
          {
            number: 1,
            verses: [],
          },
          {
            number: 2,
            verses: [],
          },
          {
            number: 3,
            verses: [],
          },
        ],
      },
      "1 John 11 - 13": {
        name: "1 John",
        chapters: [
          {
            number: 11,
            verses: [],
          },
          {
            number: 12,
            verses: [],
          },
          {
            number: 13,
            verses: [],
          },
        ],
      },
      "Song of Solomon111 - 113": {
        name: "Song of Solomon",
        chapters: [
          {
            number: 111,
            verses: [],
          },
          {
            number: 112,
            verses: [],
          },
          {
            number: 113,
            verses: [],
          },
        ],
      },
      "Genesis 1:1-3": {
        name: "Genesis",
        chapters: [
          {
            number: 1,
            verses: [{ number: 1 }, { number: 2 }, { number: 3 }],
          },
        ],
      },
      "1  John  11 :  11  -  13": {
        name: "1 John",
        chapters: [
          {
            number: 11,
            verses: [{ number: 11 }, { number: 12 }, { number: 13 }],
          },
        ],
      },
      "Song of Solomon111:111-113": {
        name: "Song of Solomon",
        chapters: [
          {
            number: 111,
            verses: [{ number: 111 }, { number: 112 }, { number: 113 }],
          },
        ],
      },
      "Genesis 1, 3, 5": {
        name: "Genesis",
        chapters: [
          {
            number: 1,
          },
          {
            number: 3,
          },
          {
            number: 5,
          },
        ],
      },
      "1  John  9,  11,  13": {
        name: "1 John",
        chapters: [
          {
            number: 9,
          },
          {
            number: 11,
          },
          {
            number: 13,
          },
        ],
      },
      "Song of Solomon97,101,103": {
        name: "Song of Solomon",
        chapters: [
          {
            number: 97,
          },
          {
            number: 101,
          },
          {
            number: 103,
          },
        ],
      },
      "Genesis 1:1, 3, 5": {
        name: "Genesis",
        chapters: [
          {
            number: 1,
            verses: [{ number: 1 }, { number: 3 }, { number: 5 }],
          },
        ],
      },
      "1  John  11 : 11 ,  13 ,   15": {
        name: "1 John",
        chapters: [
          {
            number: 11,
            verses: [{ number: 11 }, { number: 13 }, { number: 15 }],
          },
        ],
      },
      "Song of Solomon97:101,103,105": {
        name: "Song of Solomon",
        chapters: [
          {
            number: 97,
            verses: [{ number: 101 }, { number: 103 }, { number: 105 }],
          },
        ],
      },
    };

    const searchString = Object.entries(searches)
      .map((entry) => entry[0])
      .join(";");

    const expected = Object.entries(searches).map((entry) => entry[1]);

    // act
    // assert
    expect(getSearches(searchString)).toEqual(expected);
  });
});
