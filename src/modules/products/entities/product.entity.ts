import { BaseEntity } from './../../../common/bases/entities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Product extends BaseEntity {
  @Column({
    type: 'varchar',
    length: 25,
  })
  name: string;

  @Column({ nullable: true })
  description?: string;

  @Column()
  brand: string;

  @Column()
  category: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
  })
  price: number;
}
