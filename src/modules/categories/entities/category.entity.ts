import { Product } from './../../products/entities/product.entity';
import { BaseEntity } from './../../../common/bases/entities/base.entity';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @Index('Category_name_key')
  name: string;
}
