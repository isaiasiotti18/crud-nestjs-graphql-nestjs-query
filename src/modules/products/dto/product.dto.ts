import { BrandDTO } from 'src/modules/brands/dto/brand.dto';
import { CategoryDTO } from './../../categories/dto/category.dto';
import { BaseDTO } from './../../../common/bases/dto/base.dto';
import { Float, ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  FilterableOffsetConnection,
  FilterableRelation,
} from '@nestjs-query/query-graphql';

@ObjectType('Product')
@FilterableOffsetConnection('categories', () => CategoryDTO, {
  nullable: true,
})
@FilterableRelation('brand', () => BrandDTO, { nullable: true })
export class ProductDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @FilterableField({ nullable: true })
  description?: string;

  @FilterableField({ nullable: true })
  brandId?: number;

  @FilterableField(() => Float)
  price: number;
}
