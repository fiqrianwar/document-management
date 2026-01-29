import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateFolders1769658136198 implements MigrationInterface {
  name = "CreateFolders1769658136198";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "folders",
        columns: [
          {
            name: "id",
            type: "varchar",
            length: "36",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
            length: "255",
            isNullable: false,
          },
          {
            name: "parent_id",
            type: "varchar",
            length: "36",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "CURRENT_TIMESTAMP",
          },
        ],
      }),
    );

    // Optional FK (add only if folders table exists)
    // await queryRunner.createForeignKey(
    //   'documents',
    //   new TableForeignKey({
    //     columnNames: ['folder_id'],
    //     referencedTableName: 'folders',
    //     referencedColumnNames: ['id'],
    //     onDelete: 'SET NULL',
    //   })
    // )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("folders");
  }
}
