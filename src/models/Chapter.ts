import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Book } from "./Book";
import { Verse } from "./Verse";

@Entity()
export class Chapter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: number;

  @Column()
  bookName: string;

  @ManyToOne(() => Book, (book) => book.chapters)
  book: Book;

  @OneToMany(() => Verse, (verse) => verse.chapter)
  verses: Verse[];
}
