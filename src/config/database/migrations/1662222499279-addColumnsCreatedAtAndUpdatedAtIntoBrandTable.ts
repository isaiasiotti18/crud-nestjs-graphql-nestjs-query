import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addColumnsCreatedAtAndUpdatedAtIntoBrandTable1662222499279
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('brand', [
      new TableColumn({
        name: 'created_at',
        type: 'timestamp',
        default: 'now()',
      }),

      new TableColumn({
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns('brand', ['created_at', 'updated_at']);
  }
}
