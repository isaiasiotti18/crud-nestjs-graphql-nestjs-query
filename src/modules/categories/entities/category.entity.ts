import { Product } from './../../products/entities/product.entity';
import { BaseEntity } from './../../../common/bases/entities/base.entity';
import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @Index('Category_name_key')
  name: string;

  @ManyToMany(() => Product, (products) => products.categories, {
    nullable: true,
  })
  @JoinTable({ name: 'product_categories_category' })
  products: Product[];
}
