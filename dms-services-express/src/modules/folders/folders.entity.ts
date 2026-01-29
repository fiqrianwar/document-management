// folders.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Documents } from "../documents/documents.entity";

@Entity("folders")
export class Folders {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  // Self relation (parent folder)
  @ManyToOne(() => Folders, (folder) => folder.children, {
    nullable: true,
    onDelete: "SET NULL",
  })
  @JoinColumn({ name: "parent_id" })
  parentId?: Folders | null;

  @OneToMany(() => Folders, (folder) => folder.parentId)
  children!: Folders[];

  // Folder → Documents
  @OneToMany(() => Documents, (doc) => doc.folderId)
  documents!: Documents[];

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;
}
