import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class CreateRelationProductBrand1662218198816
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'product',
      new TableColumn({
        name: 'brandId',
        type: 'int',
        isNullable: true,
      }),
    );
    await queryRunner.dropColumn('product', 'brand');
    await queryRunner.createForeignKey(
      'product',
      new TableForeignKey({
        name: 'Product_Brand',
        columnNames: ['brandId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'brand',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('product', 'brandId');
    await queryRunner.addColumn(
      'product',
      new TableColumn({
        name: 'brand',
        type: 'varchar',
        length: '25',
        isNullable: true,
      }),
    );
    await queryRunner.dropForeignKey('product', 'Product_Brand');
  }
}
