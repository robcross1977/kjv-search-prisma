import { Prisma } from "@prisma/client";
import { Book } from "../../types";

export const searchMocks: {
  search: string;
  searchObj: Book;
  prismaObj?: Prisma.BookFindManyArgs[] | Prisma.BookFindManyArgs;
  sqlResult?: any;
}[] = [
  {
    search: "1John",
    searchObj: {
      name: "1 John",
      chapters: [],
    },
    prismaObj: [
      {
        include: {
          chapters: {
            include: {
              verses: {
                orderBy: {
                  number: "asc",
                },
              },
            },
            orderBy: { number: "asc" },
          },
        },
        where: { name: { startsWith: "1 John" } },
      },
    ],
    sqlResult: undefined,
  },
  {
    search: "Song Of Solomon 3",
    searchObj: {
      name: "Song Of Solomon",
      chapters: [
        {
          number: 3,
          verses: [],
        },
      ],
    },
    prismaObj: {
      include: {
        chapters: {
          include: {
            verses: {
              orderBy: {
                number: "asc",
              },
            },
          },
          orderBy: {
            number: "asc",
          },
          where: {
            AND: [
              {
                bookName: {
                  startsWith: "Song Of Solomon",
                },
              },
              {
                number: 3,
              },
            ],
          },
        },
      },
      where: {
        name: {
          startsWith: "Song Of Solomon",
        },
      },
    },
    sqlResult: undefined,
  },
  {
    search: "1 Samuel 11:11",
    searchObj: {
      name: "1 Samuel",
      chapters: [
        {
          number: 11,
          verses: [{ number: 11 }],
        },
      ],
    },
    prismaObj: [
      {
        include: {
          chapters: {
            include: {
              verses: {
                orderBy: {
                  number: "asc",
                },
                where: {
                  AND: [
                    {
                      bookName: {
                        startsWith: "1 Samuel",
                      },
                    },
                    {
                      number: {
                        in: [11],
                      },
                    },
                  ],
                },
              },
            },
            orderBy: {
              number: "asc",
            },
            where: {
              AND: [
                {
                  bookName: {
                    startsWith: "1 Samuel",
                  },
                },
                {
                  number: 11,
                },
              ],
            },
          },
        },
        where: {
          name: {
            startsWith: "1 Samuel",
          },
        },
      },
    ],
    sqlResult: undefined,
  },
  {
    search: "1 John2 - 4",
    searchObj: {
      name: "1 John",
      chapters: [
        {
          number: 2,
          verses: [],
        },
        {
          number: 3,
          verses: [],
        },
        {
          number: 4,
          verses: [],
        },
      ],
    },
    prismaObj: [
      {
        include: {
          chapters: {
            include: {
              verses: {
                orderBy: {
                  number: "asc",
                },
              },
            },
            orderBy: {
              number: "asc",
            },
            where: {
              AND: [
                {
                  bookName: {
                    startsWith: "1 John",
                  },
                },
                {
                  number: 2,
                },
              ],
            },
          },
        },
        where: {
          name: {
            startsWith: "1 John",
          },
        },
      },
      {
        include: {
          chapters: {
            include: {
              verses: {
                orderBy: {
                  number: "asc",
                },
              },
            },
            orderBy: {
              number: "asc",
            },
            where: {
              AND: [
                {
                  bookName: {
                    startsWith: "1 John",
                  },
                },
                {
                  number: 3,
                },
              ],
            },
          },
        },
        where: {
          name: {
            startsWith: "1 John",
          },
        },
      },
      {
        include: {
          chapters: {
            include: {
              verses: {
                orderBy: {
                  number: "asc",
                },
              },
            },
            orderBy: {
              number: "asc",
            },
            where: {
              AND: [
                {
                  bookName: {
                    startsWith: "1 John",
                  },
                },
                {
                  number: 4,
                },
              ],
            },
          },
        },
        where: {
          name: {
            startsWith: "1 John",
          },
        },
      },
    ],
    sqlResult: undefined,
  },
  {
    search: "1 Samuel  11 :  11  -  13",
    searchObj: {
      name: "1 Samuel",
      chapters: [
        {
          number: 11,
          verses: [{ number: 11 }, { number: 12 }, { number: 13 }],
        },
      ],
    },
    prismaObj: {
      include: {
        chapters: {
          include: {
            verses: {
              orderBy: {
                number: "asc",
              },
              where: {
                AND: [
                  {
                    bookName: {
                      startsWith: "1 Samuel",
                    },
                  },
                  {
                    number: {
                      in: [11, 12, 13],
                    },
                  },
                ],
              },
            },
          },
          orderBy: {
            number: "asc",
          },
          where: {
            AND: [
              {
                bookName: {
                  startsWith: "1 Samuel",
                },
              },
              {
                number: 11,
              },
            ],
          },
        },
      },
      where: {
        name: {
          startsWith: "1 Samuel",
        },
      },
    },
    sqlResult: undefined,
  },
  {
    search: "1  Samuel  9,  11,  13",
    searchObj: {
      name: "1 Samuel",
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
    prismaObj: [
      {
        include: {
          chapters: {
            include: {
              verses: {
                orderBy: {
                  number: "asc",
                },
              },
            },
            orderBy: {
              number: "asc",
            },
            where: {
              AND: [
                {
                  bookName: {
                    startsWith: "1 Samuel",
                  },
                },
                {
                  number: 9,
                },
              ],
            },
          },
        },
        where: {
          name: {
            startsWith: "1 Samuel",
          },
        },
      },
      {
        include: {
          chapters: {
            include: {
              verses: {
                orderBy: {
                  number: "asc",
                },
              },
            },
            orderBy: {
              number: "asc",
            },
            where: {
              AND: [
                {
                  bookName: {
                    startsWith: "1 Samuel",
                  },
                },
                {
                  number: 11,
                },
              ],
            },
          },
        },
        where: {
          name: {
            startsWith: "1 Samuel",
          },
        },
      },
      {
        include: {
          chapters: {
            include: {
              verses: {
                orderBy: {
                  number: "asc",
                },
              },
            },
            orderBy: {
              number: "asc",
            },
            where: {
              AND: [
                {
                  bookName: {
                    startsWith: "1 Samuel",
                  },
                },
                {
                  number: 13,
                },
              ],
            },
          },
        },
        where: {
          name: {
            startsWith: "1 Samuel",
          },
        },
      },
    ],
    sqlResult: undefined,
  },
  {
    search: "1 Chronicles 11:11, 13, 15",
    searchObj: {
      name: "1 Chronicles",
      chapters: [
        {
          number: 11,
          verses: [{ number: 11 }, { number: 13 }, { number: 15 }],
        },
      ],
    },
    prismaObj: undefined,
    sqlResult: undefined,
  },
];
