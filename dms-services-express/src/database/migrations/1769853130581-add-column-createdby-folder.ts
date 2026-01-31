import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnCreatedbyFolder1769853130581 implements MigrationInterface {
  name = "AddColumnCreatedbyFolder1769853130581";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`folders\` ADD \`created_by\` varchar(255) NOT NULL`,
    );

    await queryRunner.query(`UPDATE folders SET created_by = 'pdf'`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`folders\` DROP COLUMN \`created_by\``,
    );
  }
}
