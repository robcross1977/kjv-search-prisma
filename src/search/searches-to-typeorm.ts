import { EntityManager } from "typeorm";
import { Book } from "./types";
import {} from "@robcross1977/kjv-data";

const toTypeorm = async (searches: Book[]): Promise<Book[]> => {
  const manager: EntityManager = getManager();
  const results: Book[] = [];

  for (const search of searches) {
    let query = manager.createQueryBuilder(Book, "book");

    query = query.where("book.name ILIKE :name", { name: search.name });

    if (search.chapters && search.chapters.length > 0) {
      query = query.leftJoinAndSelect(
        "book.chapters",
        "chapters",
        "chapters.bookName ILIKE :name",
        { name: search.name }
      );

      for (const ch of search.chapters) {
        query = query.andWhere("chapters.number = :number", {
          number: ch.number,
        });

        if (ch.verses && ch.verses.length > 0) {
          query = query.leftJoinAndSelect(
            "chapters.verses",
            "verses",
            "verses.bookName ILIKE :name",
            { name: search.name }
          );

          query = query.andWhere("verses.number IN (:...verses)", {
            verses: ch.verses.map((v) => v.number),
          });
        }
      }
    }

    results.push(await query.getOne());
  }

  return results;
};

export { toTypeorm };
