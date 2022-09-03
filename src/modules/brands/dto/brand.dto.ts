import { ProductDTO } from './../../products/dto/product.dto';
import { BaseDTO } from './../../../common/bases/dto/base.dto';
import {
  FilterableField,
  FilterableOffsetConnection,
} from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType('Brand')
@FilterableOffsetConnection('products', () => ProductDTO, { nullable: true })
export class BrandDTO extends BaseDTO {
  @FilterableField()
  name: string;
}
