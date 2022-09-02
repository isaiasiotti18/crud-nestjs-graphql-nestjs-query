import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { CategoryDTO } from './dto/category.dto';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';

@Resolver(() => CategoryDTO)
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Mutation(() => CategoryDTO)
  createCategory(
    @Args('createCategoryInput') createCategoryInput: CreateCategoryInput,
  ) {
    return this.categoriesService.create(createCategoryInput);
  }

  @Query(() => [CategoryDTO], { name: 'categories' })
  findAll() {
    return this.categoriesService.findAll();
  }

  @Query(() => CategoryDTO, { name: 'category' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.categoriesService.findOne(id);
  }

  @Mutation(() => CategoryDTO)
  updateCategory(
    @Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput,
  ) {
    return this.categoriesService.update(
      updateCategoryInput.id,
      updateCategoryInput,
    );
  }

  @Mutation(() => CategoryDTO)
  removeCategory(@Args('id', { type: () => Int }) id: number) {
    return this.categoriesService.remove(id);
  }
}
