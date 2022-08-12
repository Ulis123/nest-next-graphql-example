import { Field, ID, InputType, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsOptional, IsString } from "class-validator";

@Entity()
@InputType("CategoryInputType", { isAbstract: true })
@ObjectType()
export class Category {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ unique: true })
  @Field(() => String)
  @IsString()
  name: string;

  @Column({ nullable: true, default: null })
  @Field(() => String, { nullable: true, defaultValue: null })
  @IsString()
  @IsOptional()
  picture?: string;
}
