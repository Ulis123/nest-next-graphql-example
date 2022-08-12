import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CategoriesService } from "./categories.service";
import { Category } from "./entities/category.entity";
import { CreateCategoryInput } from "./dto/create-category.input";

@Resolver(() => Category)
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Mutation(() => Category)
  async createCategory(
    @Args("createCategoryInput", { type: () => CreateCategoryInput })
    createCategoryInput: CreateCategoryInput,
  ): Promise<Category> {
    return await this.categoriesService.create(createCategoryInput);
  }

  @Query(() => [Category], { name: "categories" })
  async getCategories(): Promise<Category[]> {
    return await this.categoriesService.findAll();
  }

  @Query(() => Category, { name: "category" })
  async getCategory(@Args("id", { type: () => Int }) id: number): Promise<Category> {
    return await this.categoriesService.findOne(id);
  }

  // @Mutation(() => Category)
  // updateCategory(
  //   @Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput,
  // ) {
  //   return this.categoriesService.update(
  //     updateCategoryInput.id,
  //     updateCategoryInput,
  //   );
  // }
  //
  // @Mutation(() => Category)
  // removeCategory(@Args('id', { type: () => Int }) id: number) {
  //   return this.categoriesService.remove(id);
  // }
}
