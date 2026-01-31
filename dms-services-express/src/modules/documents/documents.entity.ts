// documents.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  Index,
} from "typeorm";
import { Folders } from "../folders/folders.entity";

@Entity("documents")
export class Documents {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Index()
  @Column({ name: "folder_id", nullable: true })
  folderId!: string | null;

  @Index()
  @ManyToOne(() => Folders, (folder) => folder.documents, {
    nullable: true,
    onDelete: "SET NULL",
  })
  @JoinColumn({ name: "folder_id" })
  folder?: string | null;

  @Column({ name: "created_by" })
  createdBy!: string;

  @Column({ name: "document_type" })
  documentType!: string;

  @Column({ name: "item_type_flag", default: "D" })
  itemTypeFlag!: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;
}
