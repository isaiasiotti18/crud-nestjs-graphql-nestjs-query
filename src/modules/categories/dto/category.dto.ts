import { ProductDTO } from './../../products/dto/product.dto';
import { BaseDTO } from './../../../common/bases/dto/base.dto';
import { ObjectType } from '@nestjs/graphql';
import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';

@ObjectType('Category')
@FilterableOffsetConnection('products', () => ProductDTO, {
  nullable: true,
})
export class CategoryDTO extends BaseDTO {
  @FilterableField()
  name: string;
}
