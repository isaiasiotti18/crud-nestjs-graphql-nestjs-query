import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddColumnsCreatedAtAndUpdatedAtintoTableCategory1662150685365
  implements MigrationInterface
{
  name?: string;

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('category', [
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
    await queryRunner.dropColumns('category', ['created_at', 'updated_at']);
  }
}
