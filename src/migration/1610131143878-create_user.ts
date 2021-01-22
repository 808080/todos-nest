import { MigrationInterface, QueryRunner } from "typeorm";

export class createUser1610131143878 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" (
            "id"          SERIAL PRIMARY KEY,
            "login"       VARCHAR(255)  NOT NULL UNIQUE CHECK (length(login) >= 5),
            "password"    VARCHAR(255)  NOT NULL,
            "created"     TIMESTAMP     NOT NULL DEFAULT NOW(),
            "email"       VARCHAR(255)  NULL UNIQUE,
            "firstName"   VARCHAR(255)  NULL,
            "lastName"    VARCHAR(255)  NULL,
            "fullName"    VARCHAR(255)  NULL
          )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE user`);
    }

}
