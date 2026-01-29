import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateFoldersAndDocuments1769665336653 implements MigrationInterface {
  name = "CreateFoldersAndDocuments1769665336653";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE folders (
        id CHAR(36) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        parent_id CHAR(36) NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT fk_folder_parent
          FOREIGN KEY (parent_id)
          REFERENCES folders(id)
          ON DELETE SET NULL
      );
    `);

    await queryRunner.query(`
      CREATE TABLE documents (
        id CHAR(36) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        folder_id CHAR(36) NULL,
        created_by VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT fk_document_folder
          FOREIGN KEY (folder_id)
          REFERENCES folders(id)
          ON DELETE SET NULL
      );
    `);

    await queryRunner.query(`
      CREATE INDEX idx_documents_folder_id
      ON documents(folder_id);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE documents`);
    await queryRunner.query(`DROP TABLE folders`);
  }
}
