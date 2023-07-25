import { MigrationInterface, QueryRunner } from 'typeorm';

export class SuperUserMigration1690208315668 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO "our-website"."user" (
        "created_At",
        "updated_At",
        login,
        username,
        usersurname,
        usersecondname,
        email,
        password,
        super_user) VALUES (
        now(),
        now(),
        'superuser',
        'superuser',
        'superuser',
        NULL,
        'superuser@mail.ru',
        'superuser',
        true)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM "our-website"."user" WHERE email = 'superuser@mail.ru'`,
    );
  }
}
