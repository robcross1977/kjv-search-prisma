import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Chapter } from "./Chapter";

@Entity()
export class Verse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: number;

  @Column()
  text: string;

  @Column()
  chapterNumber: number;

  @Column()
  bookName: string;

  @ManyToOne(() => Chapter, (chapter) => chapter.verses)
  chapter: Chapter;
}
