import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { SkillsService } from "./skills.service";
import { Skill } from "./entities/skill.entity";
import { CreateSkillInput } from "./dto/create-skill.input";

@Resolver(() => Skill)
export class SkillsResolver {
  constructor(private readonly skillsService: SkillsService) {}

  @Mutation(() => Skill)
  async createSkill(
    @Args("createSkillInput", { type: () => CreateSkillInput })
    createSkillInput: CreateSkillInput,
  ): Promise<Skill> {
    return await this.skillsService.create(createSkillInput);
  }

  @Query(() => [Skill], { name: "skills" })
  async findAll(): Promise<Skill[]> {
    return await this.skillsService.findAll();
  }

  @Query(() => Skill, { name: "skill" })
  async findOne(@Args("id", { type: () => Int }) id: number): Promise<Skill> {
    return await this.skillsService.findOne(id);
  }

  // @Mutation(() => Skill)
  // updateSkill(@Args('updateSkillInput') updateSkillInput: UpdateSkillInput) {
  //   return this.skillsService.update(updateSkillInput.id, updateSkillInput);
  // }
  //
  // @Mutation(() => Skill)
  // removeSkill(@Args('id', { type: () => Int }) id: number) {
  //   return this.skillsService.remove(id);
  // }
}
