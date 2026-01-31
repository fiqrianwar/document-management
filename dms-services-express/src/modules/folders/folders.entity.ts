// folders.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
  Index,
} from "typeorm";
import { Documents } from "../documents/documents.entity";

@Entity("folders")
export class Folders {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Index()
  @Column({ name: "parent_id", nullable: true })
  parentId!: string | null;

  @ManyToOne(() => Folders, (folder) => folder.children, {
    nullable: true,
    onDelete: "SET NULL",
  })
  @JoinColumn({ name: "parent_id" })
  parent!: Folders | null;

  @OneToMany(() => Folders, (folder) => folder.parent)
  children!: Folders[];

  @OneToMany(() => Documents, (doc) => doc.folder)
  documents!: Documents[];

  @Column({ name: "created_by" })
  createdBy!: string;

  @Column({ name: "item_type_flag", default: "F" })
  itemTypeFlag!: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;
}
