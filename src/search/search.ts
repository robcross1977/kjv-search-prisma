import { Prisma } from "@prisma/client";
import prisma from "../prisma";
import { toPrisma } from "./searches-to-prisma";
import { getSearches } from "./string-to-searches";

const bibleSearchTransaction = async (
  selects: Array<Prisma.BookFindManyArgs>
) => prisma.$transaction(selects.map((s) => prisma.book.findMany(s)));

const search = async (search: string) => {
  const searches = getSearches(search);
  const prismaQueries = toPrisma(searches).map((pq) => pq.search);
  const result = await bibleSearchTransaction(prismaQueries);

  return result;
};

export { search };
