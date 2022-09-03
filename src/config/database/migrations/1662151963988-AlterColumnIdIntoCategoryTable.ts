import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterColumnIdIntoCategoryTable1662151963988
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'category',
      'id',
      new TableColumn({
        name: 'id',
        type: 'int',
        isPrimary: true,
        generationStrategy: 'increment',
        isGenerated: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'category',
      'id',
      new TableColumn({
        name: 'id',
        type: 'int',
        isPrimary: true,
        generationStrategy: 'increment',
      }),
    );
  }
}
