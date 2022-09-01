import { ProductDTO } from './dto/product.dto';
import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';

@Resolver(() => ProductDTO)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Mutation(() => ProductDTO)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ): string {
    return this.productsService.create(createProductInput);
  }

  @Query(() => [ProductDTO], { name: 'products' })
  findAll() {
    return this.productsService.findAll();
  }

  @Query(() => ProductDTO, { name: 'product' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.productsService.findOne(id);
  }

  @Mutation(() => ProductDTO)
  updateProduct(
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ) {
    return this.productsService.update(
      updateProductInput.id,
      updateProductInput,
    );
  }

  @Mutation(() => ProductDTO)
  removeProduct(@Args('id', { type: () => ID }) id: string) {
    return this.productsService.remove(id);
  }
}
