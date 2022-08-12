import { InputType, PickType } from "@nestjs/graphql";
import { Skill } from "../entities/skill.entity";

@InputType()
export class CreateSkillInput extends PickType(Skill, ["name"]) {}
