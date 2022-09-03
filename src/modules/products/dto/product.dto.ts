import { BrandDTO } from './../../brands/dto/brand.dto';
import { CategoryDTO } from './../../categories/dto/category.dto';
import { BaseDTO } from './../../../common/bases/dto/base.dto';
import { ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  FilterableOffsetConnection,
  FilterableRelation,
} from '@nestjs-query/query-graphql';

@ObjectType('Product')
@FilterableOffsetConnection('categories', () => CategoryDTO, {
  nullable: true,
})
@FilterableRelation('brand', () => BrandDTO)
export class ProductDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @FilterableField({ nullable: true })
  description?: string;

  @FilterableField()
  price: number;
}
