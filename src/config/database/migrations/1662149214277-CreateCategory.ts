import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCategory1662149214277 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS "category"`);
    await queryRunner.createTable(
      new Table({
        name: 'category',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '25',
            isUnique: true,
          },
        ],
      }),
    );
    await queryRunner.query(
      `CREATE UNIQUE INDEX "Category_name_key" ON "category"("name")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'category',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '25',
            isUnique: true,
          },
        ],
      }),
    );
    await queryRunner.query(`DROP INDEX "Category_name_key"`);
    await queryRunner.query(`DROP TABLE IF EXISTS "category"`);
  }
}
