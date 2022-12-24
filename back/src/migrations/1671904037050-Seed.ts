import { MigrationInterface, QueryRunner } from "typeorm";
import { Skill } from "src/skills/entities/skill.entity";
import { Category } from "src/categories/entities/category.entity";
import { User } from "src/users/entities/user.entity";

export class Seed1671904037050 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.upsert<Skill>(
      Skill,
      [{ name: "React" }, { name: "Next.js" }, { name: "Nest" }, { name: "GraphQl" }, { name: "Postgres" }],
      ["name"],
    );

    await queryRunner.manager.upsert<Category>(
      Category,
      [
        {
          name: "Frontend",
          picture:
            "https://d33wubrfki0l68.cloudfront.net/0c1f2b3a7db2b90f7c24915eb8b1223bbd80d3e5/d5c2a/static/b87971fa3d35839c9b909d9dffc76dc9/frontend.png",
        },
        {
          name: "Backend",
          picture:
            "https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_Become_a_Back_End_Developer.jpg",
        },
        {
          name: "Databases",
          picture:
            "https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15493/0712-Bad_Practices_in_Database_Design_-_Are_You_Making_These_Mistakes_Dan_Social-754bc73011e057dc76e55a44a954e0c3.png",
        },
      ],
      ["name"],
    );

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
