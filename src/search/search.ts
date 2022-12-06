import { Prisma } from "@prisma/client";
import prisma from "../prisma";
import { toPrisma } from "./searches-to-prisma";
import { getSearches } from "./string-to-searches";

const bibleSearchTransaction = async (
  selects: Array<Prisma.BookFindManyArgs>
) => {
  console.log(`selects ${selects}`);
  return prisma.$transaction(
    selects.map((s) => {
      return prisma.book.findMany(s);
    })
  );
};

const search = async (search: string) => {
  console.log(`search: ${search}`);
  const searches = getSearches(search);
  console.log(`searches: ${searches}`);
  const prismaQueries = toPrisma(searches).map((pq) => pq.search);
  console.log(`prismaQueries: ${prismaQueries}`);
  const result = await bibleSearchTransaction(prismaQueries);
  console.log(`result: ${result}`);
  return result;
};

export { search };
