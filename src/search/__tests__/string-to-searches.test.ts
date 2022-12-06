import { getSearches } from "../string-to-searches";
import { Book } from "../types";

describe("string-to-searches", () => {
  // Book Searches
  const bookGenesis = "Genesis";
  const bookGenesisExpected: Book[] = [{ name: "Genesis", chapters: [] }];
  const book1John = "1John";
  const book1JohnExpected: Book[] = [{ name: "1 John", chapters: [] }];
  const bookSongOfSolomon = "Song of Solomon";
  const bookSongOfSolomonExpected: Book[] = [
    { name: "Song of Solomon", chapters: [] },
  ];
  const book11John = "11 John"; // this should fail
  const book11JohnExpected: Book[] = [];

  // Book Chapter Searches
  const bookChapterGenesis = "Genesis 1";
  const bookChapterGenesisExpected: Book[] = [
    {
      name: "Genesis",
      chapters: [{ number: 1, verses: [] }],
    },
  ];

  const bookChapter1John = "1John11";
  const bookChapter1JohnExpected: Book[] = [
    { name: "1 John", chapters: [{ number: 11, verses: [] }] },
  ];

  const bookChapterSongOfSolomon = "Song of Solomon 111";
  const bookChapterSongOfSolomonExpected: Book[] = [
    { name: "Song of Solomon", chapters: [{ number: 111, verses: [] }] },
  ];

  // Book Chapter:Verse Searches
  const bookChapterVerseGenesis = "Genesis 1:1";
  const bookChapterVerseGenesisExpected: Book[] = [
    {
      name: "Genesis",
      chapters: [
        {
          number: 1,
          verses: [{ number: 1 }],
        },
      ],
    },
  ];

  const bookChapterVerse1John = "1 John 11:11";
  const bookChapterVerse1JohnExpected: Book[] = [
    {
      name: "1 John",
      chapters: [
        {
          number: 11,
          verses: [{ number: 11 }],
        },
      ],
    },
  ];

  const bookChapterVerseSongOfSolomon = "Song Of Solomon 111:111";
  const bookChapterVerseSongOfSolomonExpected: Book[] = [
    {
      name: "Song Of Solomon",
      chapters: [
        {
          number: 111,
          verses: [{ number: 111 }],
        },
      ],
    },
  ];

  // Book ChapterRange Searches
  const bookChapterRangeGenesis = "Genesis 1-3";
  const bookChapterRangeGenesisExpected: Book[] = [
    {
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
  ];

  const bookChapterRange1John = "1 John 11 - 13";
  const bookChapterRange1JohnExpected: Book[] = [
    {
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
  ];

  const bookChapterRangeSongOfSolomon = "Song of Solomon111 - 113";
  const bookChapterRangeSongOfSolomonExpected: Book[] = [
    {
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
  ];

  const bookChapterVerseRangeGenesis = "Genesis 1:1-3";
  const bookChapterVerseRangeGenesisExpected: Book[] = [
    {
      name: "Genesis",
      chapters: [
        {
          number: 1,
          verses: [{ number: 1 }, { number: 2 }, { number: 3 }],
        },
      ],
    },
  ];

  const bookChapterVerseRange1John = "1  John  11 :  11  -  13";
  const bookChapterVerseRange1JohnExpected: Book[] = [
    {
      name: "1 John",
      chapters: [
        {
          number: 11,
          verses: [{ number: 11 }, { number: 12 }, { number: 13 }],
        },
      ],
    },
  ];

  const bookChapterVerseRangeSongOfSolomon = "Song of Solomon111:111-113";
  const bookChapterVerseRangeSongOfSolomonExpected: Book[] = [
    {
      name: "Song of Solomon",
      chapters: [
        {
          number: 111,
          verses: [{ number: 111 }, { number: 112 }, { number: 113 }],
        },
      ],
    },
  ];

  const bookChapterNonConsecutiveGenesis = "Genesis 1, 3, 5";
  const bookChapterNonConsecutiveGenesisExpected: Book[] = [
    {
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
  ];

  const bookChapterNonConsecutive1John = "1  John  9,  11,  13";
  const bookChapterNonConsecutive1JohnExpectation: Book[] = [
    {
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
  ];

  const bookChapterNonConsecutiveSongOfSolomon = "Song of Solomon97,101,103";
  const bookChapterNonConsecutiveSongOfSolomonExpected: Book[] = [
    {
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
  ];

  const bookChapterNonConsecutiveVerseGenesis = "Genesis 1:1, 3, 5";
  const bookChapterNonConsecutiveVerseGenesisExpected: Book[] = [
    {
      name: "Genesis",
      chapters: [
        {
          number: 1,
          verses: [{ number: 1 }, { number: 3 }, { number: 5 }],
        },
      ],
    },
  ];

  const bookChapterNonConsecutiveVerse1John = "1  John  11 : 11 ,  13 ,   15";
  const bookChapterNonConsecutiveVerse1JohnExpected: Book[] = [
    {
      name: "1 John",
      chapters: [
        {
          number: 11,
          verses: [{ number: 11 }, { number: 13 }, { number: 15 }],
        },
      ],
    },
  ];

  const bookChapterNonConsecutiveVerseSongOfSolomon =
    "Song of Solomon97:101,103,105";
  const bookChapterNonConsecutiveVerseSongOfSolomonExpected: Book[] = [
    {
      name: "Song of Solomon",
      chapters: [
        {
          number: 97,
          verses: [{ number: 101 }, { number: 103 }, { number: 105 }],
        },
      ],
    },
  ];

  it("should return an equivalent search object for each search passed to it", () => {
    // arrange
    const searchExpectations = [
      {
        search: bookGenesis,
        expectation: bookGenesisExpected,
      },
      {
        search: book1John,
        expectation: book1JohnExpected,
      },
      {
        search: bookSongOfSolomon,
        expectation: bookSongOfSolomonExpected,
      },
      {
        search: book11John,
        expectation: book11JohnExpected,
      },
      {
        search: bookChapterGenesis,
        expectation: bookChapterGenesisExpected,
      },
      {
        search: bookChapter1John,
        expectation: bookChapter1JohnExpected,
      },
      {
        search: bookChapterSongOfSolomon,
        expectation: bookChapterSongOfSolomonExpected,
      },
      {
        search: bookChapterVerseGenesis,
        expectation: bookChapterVerseGenesisExpected,
      },
      {
        search: bookChapterVerse1John,
        expectation: bookChapterVerse1JohnExpected,
      },
      {
        search: bookChapterVerseSongOfSolomon,
        expectation: bookChapterVerseSongOfSolomonExpected,
      },
      {
        search: bookChapterRangeGenesis,
        expectation: bookChapterRangeGenesisExpected,
      },
      {
        search: bookChapterRange1John,
        expectation: bookChapterRange1JohnExpected,
      },
      {
        search: bookChapterRangeSongOfSolomon,
        expectation: bookChapterRangeSongOfSolomonExpected,
      },
      {
        search: bookChapterVerseRangeGenesis,
        expectation: bookChapterVerseRangeGenesisExpected,
      },
      {
        search: bookChapterVerseRange1John,
        expectation: bookChapterVerseRange1JohnExpected,
      },
      {
        search: bookChapterVerseRangeSongOfSolomon,
        expectation: bookChapterVerseRangeSongOfSolomonExpected,
      },
      {
        search: bookChapterNonConsecutiveGenesis,
        expectation: bookChapterNonConsecutiveGenesisExpected,
      },
      {
        search: bookChapterNonConsecutive1John,
        expectation: bookChapterNonConsecutive1JohnExpectation,
      },
      {
        search: bookChapterNonConsecutiveSongOfSolomon,
        expectation: bookChapterNonConsecutiveSongOfSolomonExpected,
      },
      {
        search: bookChapterNonConsecutiveVerseGenesis,
        expectation: bookChapterNonConsecutiveVerseGenesisExpected,
      },
      {
        search: bookChapterNonConsecutiveVerse1John,
        expectation: bookChapterNonConsecutiveVerse1JohnExpected,
      },
      {
        search: bookChapterNonConsecutiveVerseSongOfSolomon,
        expectation: bookChapterNonConsecutiveVerseSongOfSolomonExpected,
      },
    ];

    const searches = searchExpectations.map((s) => s.search).join(";");
    const expectations = searchExpectations.flatMap((s) => s.expectation);

    // act
    const result = getSearches(searches);

    // assert
    expect(result).toEqual(expectations);
  });
});
