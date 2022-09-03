import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableProductCategoriesCategory1662220168559
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'product_categories_category',
        columns: [
          {
            name: 'productId',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'categoryId',
            type: 'int',
            isPrimary: true,
          },
        ],
        foreignKeys: [
          {
            columnNames: ['productId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'product',
          },
          {
            columnNames: ['categoryId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'category',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('product_categories_category');
  }
}
