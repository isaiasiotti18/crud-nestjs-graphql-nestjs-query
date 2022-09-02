import { BaseEntity } from './../../../common/bases/entities/base.entity';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
}
