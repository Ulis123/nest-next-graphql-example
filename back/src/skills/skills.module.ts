import { Module } from "@nestjs/common";
import { SkillsService } from "./skills.service";
import { SkillsResolver } from "./skills.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Skill } from "./entities/skill.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Skill])],
  providers: [SkillsResolver, SkillsService],
  exports: [SkillsService],
})
export class SkillsModule {}
