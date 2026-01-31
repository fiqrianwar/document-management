import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNewColumnFolderDocuments1769825862404 implements MigrationInterface {
  name = "AddNewColumnFolderDocuments1769825862404";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`folders\` ADD \`item_type_flag\` varchar(255) NOT NULL DEFAULT 'F'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`documents\` ADD \`item_type_flag\` varchar(255) NOT NULL DEFAULT 'D'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`documents\` ADD \`document_type\` varchar(255) NOT NULL`,
    );

    await queryRunner.query(`UPDATE documents SET document_type = 'pdf'`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`documents\` DROP COLUMN \`item_type_flag\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`documents\` DROP COLUMN \`document_type\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`folders\` DROP COLUMN \`item_type_flag\``,
    );
  }
}
