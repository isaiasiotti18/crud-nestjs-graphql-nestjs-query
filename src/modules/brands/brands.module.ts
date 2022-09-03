import { UpdateBrandInput } from './dto/update-brand.input';
import { CreateBrandInput } from './dto/create-brand.input';
import { Brand } from './entities/brand.entity';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsResolver } from './brands.resolver';
import {
  NestjsQueryGraphQLModule,
  PagingStrategies,
} from '@nestjs-query/query-graphql';
import { BrandDTO } from './dto/brand.dto';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Brand])],
      resolvers: [
        {
          DTOClass: BrandDTO,
          EntityClass: Brand,
          CreateDTOClass: CreateBrandInput,
          UpdateDTOClass: UpdateBrandInput,
          enableTotalCount: true,
          pagingStrategy: PagingStrategies.OFFSET,
        },
      ],
    }),
  ],
  providers: [BrandsResolver, BrandsService],
})
export class BrandsModule {}
