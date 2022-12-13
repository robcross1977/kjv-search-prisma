import { Prisma } from "@prisma/client";
import prisma from "../prisma";
import { toPrisma } from "./searches-to-prisma";
import { getSearches } from "./string-to-searches";
import { Book } from "./types";

const bibleSearchTransaction = async (
  selects: Array<Prisma.BookFindManyArgs>
): Promise<Book[][]> =>
  prisma !== undefined
    ? prisma?.$transaction(selects.map((s) => prisma!.book.findMany(s)))
    : ([] as Book[][]);

const search = async (search: string) => {
  const searches = getSearches(search);
  const prismaQueries = toPrisma(searches).map((pq) => pq);
  const result = await bibleSearchTransaction(prismaQueries);

  return result;
};

export { search };
