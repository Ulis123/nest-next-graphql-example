import { InputType, PickType } from "@nestjs/graphql";
import { Category } from "../entities/category.entity";

@InputType()
export class CreateCategoryInput extends PickType(Category, ["name", "picture"]) {}
