import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { Skill } from "./entities/skill.entity";
import { CreateSkillInput } from "./dto/create-skill.input";
import { UpdateSkillInput } from "./dto/update-skill.input";

@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(Skill)
    private readonly skills: Repository<Skill>,
  ) {}

  async create(createSkillInput: CreateSkillInput) {
    return await this.skills.save(this.skills.create(createSkillInput));
  }

  async findAll() {
    return await this.skills.find();
  }

  async findOne(id: number) {
    return await this.skills.findOne({ where: { id } });
  }

  update(id: number, updateSkillInput: UpdateSkillInput) {
    return `This action updates a #${id} skill`;
  }

  remove(id: number) {
    return `This action removes a #${id} skill`;
  }
}
