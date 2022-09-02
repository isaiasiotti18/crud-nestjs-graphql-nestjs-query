import { CreateCategoryInput } from './dto/create-category.input';
import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesResolver } from './categories.resolver';
import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Category } from './entities/category.entity';
import { CategoryDTO } from './dto/category.dto';
import { UpdateCategoryInput } from './dto/update-category.input';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Category])],
      resolvers: [
        {
          DTOClass: CategoryDTO,
          EntityClass: Category,
          CreateDTOClass: CreateCategoryInput,
          UpdateDTOClass: UpdateCategoryInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [CategoriesResolver, CategoriesService],
})
export class CategoriesModule {}
