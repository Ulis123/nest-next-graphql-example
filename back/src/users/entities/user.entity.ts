import { InternalServerErrorException } from "@nestjs/common";
import { Field, GraphQLISODateTime, ID, InputType, Int, ObjectType, registerEnumType } from "@nestjs/graphql";
import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsBoolean, IsEmail, IsEnum, IsOptional, IsString, IsUrl } from "class-validator";
import { compare, hash } from "bcrypt";

import { Gender } from "src/types/common";

registerEnumType(Gender, { name: "Gender" });

@Entity()
@InputType("UserInputType", { isAbstract: true })
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ select: false })
  @Field(() => String)
  @IsString()
  password: string;

  @Column({ unique: true })
  @Field(() => String)
  @IsEmail()
  email: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsEmail()
  workEmail?: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  firstName?: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  lastName?: string;

  @Column({ type: "enum", enum: Gender, nullable: true })
  @Field(() => Gender, { nullable: true })
  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  about?: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  phone?: string;

  @Column({ type: "date", nullable: true })
  @Field(() => GraphQLISODateTime, { nullable: true })
  @IsOptional()
  @IsString()
  birthday?: Date;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsUrl()
  linkedinUrl?: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsUrl()
  facebookUrl?: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsUrl()
  websiteUrl?: string;

  // experienceLevel;
  // jobStatus;
  // position;

  @Column({ nullable: true })
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  picture?: string;

  @Column({ nullable: true })
  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsUrl()
  step?: number;

  @Column({ default: false, nullable: true })
  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  enabled?: boolean;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    if (this.password) {
      try {
        this.password = await hash(this.password, 12);
      } catch (e) {
        console.log(e);
        throw new InternalServerErrorException();
      }
    }
  }

  async checkPassword(aPassword: string): Promise<boolean> {
    try {
      return await compare(aPassword, this.password);
    } catch (e) {
      console.log(e);
      throw new InternalServerErrorException();
    }
  }
}
