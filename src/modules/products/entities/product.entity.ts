import { Category } from './../../categories/entities/category.entity';
import { Brand } from './../../brands/entities/brand.entity';
import { BaseEntity } from './../../../common/bases/entities/base.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Product extends BaseEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @ManyToOne(() => Brand, (brand) => brand.products)
  @JoinColumn({ name: 'brandId' })
  brand: Brand;

  @Column()
  brandId: number;

  @ManyToMany(() => Category)
  @JoinTable()
  categories: Category[];

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
  })
  price: number;
}
