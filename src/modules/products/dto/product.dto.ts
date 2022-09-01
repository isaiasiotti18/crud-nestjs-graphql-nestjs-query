import { BaseDTO } from './../../../common/bases/dto/base.dto';
import { ObjectType } from '@nestjs/graphql';
import { FilterableField } from '@nestjs-query/query-graphql';

@ObjectType('Product')
export class ProductDTO extends BaseDTO {
  @FilterableField()
  name: string;

  @FilterableField({ nullable: true })
  description?: string;

  @FilterableField()
  brand: string;

  @FilterableField()
  category: string;

  @FilterableField()
  price: number;
}
