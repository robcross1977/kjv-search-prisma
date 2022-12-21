import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Chapter } from "./Chapter";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Chapter, (chapter) => chapter.book)
  chapters: Chapter[];
}
