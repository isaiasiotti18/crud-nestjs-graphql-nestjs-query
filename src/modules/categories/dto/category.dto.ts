import { BaseDTO } from './../../../common/bases/dto/base.dto';
import { ObjectType } from '@nestjs/graphql';
import { FilterableField } from '@nestjs-query/query-graphql';

@ObjectType('Category')
export class CategoryDTO extends BaseDTO {
  @FilterableField()
  name: string;
}
