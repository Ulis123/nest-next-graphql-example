import { ObjectType, Field, ID, InputType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsString } from "class-validator";

@Entity()
@InputType("SkillInputType", { isAbstract: true })
@ObjectType()
export class Skill {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ unique: true })
  @Field(() => String)
  @IsString()
  name: string;
}
