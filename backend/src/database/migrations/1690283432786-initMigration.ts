import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitMigration1690104042289 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "our_website"."user" (
        "id" SERIAL NOT NULL,
        "created_At" TIMESTAMPTZ NOT NULL,
        "updated_At" TIMESTAMPTZ NOT NULL,
        "login" VARCHAR(30) NOT NULL,
        "username" VARCHAR(30) NOT NULL,
        "usersurname" VARCHAR(30) NOT NULL,
        "usersecondname" VARCHAR(30),
        "email" VARCHAR(64) NOT NULL,
        "password" CHAR(64) NOT NULL,
        "super_user" BOOL DEFAULT false,
        UNIQUE ("login", "email"),
        PRIMARY KEY ("id")
      )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "our_website"."user"`);
  }
}
