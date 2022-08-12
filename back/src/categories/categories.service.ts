import { Injectable } from "@nestjs/common";
import { CreateCategoryInput } from "./dto/create-category.input";
import { InjectRepository } from "@nestjs/typeorm";
import { Category } from "./entities/category.entity";
import { Repository } from "typeorm";
import { UpdateCategoryInput } from "./dto/update-category.input";

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categories: Repository<Category>,
  ) {}

  async create(createCategoryInput: CreateCategoryInput) {
    return await this.categories.save(this.categories.create(createCategoryInput));
  }

  async findAll() {
    return await this.categories.find();
  }

  async findOne(id: number) {
    return await this.categories.findOne({ where: { id } });
  }

  update(id: number, updateCategoryInput: UpdateCategoryInput) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
