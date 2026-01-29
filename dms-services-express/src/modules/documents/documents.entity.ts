import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity("documents")
export class Documents {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "name" })
  name!: string;

  @Column({ name: "folder_id", type: "uuid", nullable: true })
  folderId!: string | null;

  @Column({ name: "created_by", default: "" })
  createdBy!: string;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;
}
