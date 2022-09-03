import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateBrand1662153486905 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'brand',
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
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
      `CREATE UNIQUE INDEX "Brand_name_key" ON "brand"("name") `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(`DROP TABLE IF EXISTS "brand"`);
    await queryRunner.query(`DROP INDEX "Brand_name_key"`);
  }
}
