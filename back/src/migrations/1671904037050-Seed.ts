import { MigrationInterface, QueryRunner } from "typeorm";
import { Skill } from "src/skills/entities/skill.entity";
import { Category } from "src/categories/entities/category.entity";
import { User } from "src/users/entities/user.entity";

export class Seed1671904037050 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.insert<Skill>(Skill, [
      { name: "React" },
      { name: "Next.js" },
      { name: "Nest" },
      { name: "GraphQl" },
      { name: "Postgres" },
    ]);

    await queryRunner.manager.insert<Category>(Category, [
      { name: "Frontend" },
      { name: "Backend" },
      { name: "Databases" },
    ]);

    await queryRunner.manager.save(
      queryRunner.manager.create<User>(User, {
        email: "user@gmail.com",
        password: "A1234567",
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE * FROM category`);
    await queryRunner.query(`DELETE * FROM skill`);
    await queryRunner.query(`DELETE * FROM user`);
  }
}
