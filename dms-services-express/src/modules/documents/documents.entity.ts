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

  @Index() // 🔥 important for performance
  @ManyToOne(() => Folders, (folder) => folder.documents, {
    nullable: true,
    onDelete: "SET NULL",
  })
  @JoinColumn({ name: "folder_id" })
  folderId?: Folders | null;

  @Column({ name: "created_by" })
  createdBy!: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;
}
