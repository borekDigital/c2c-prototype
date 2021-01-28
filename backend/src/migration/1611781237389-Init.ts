import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1611781237389 implements MigrationInterface {
  name = 'Init1611781237389';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "coin" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "year_of_issue" character varying NOT NULL, "country" character varying NOT NULL, CONSTRAINT "PK_650993fc71b789e4793b62fbcac" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "coin"`);
  }
}
