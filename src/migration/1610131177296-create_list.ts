import {MigrationInterface, QueryRunner} from "typeorm";

export class createList1610131177296 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "list" (
            "id"          SERIAL PRIMARY KEY,
            "created"     TIMESTAMP     NOT NULL DEFAULT NOW(),
            "name"        VARCHAR(255)  NOT NULL UNIQUE,
            "user_id"     INT NOT NULL REFERENCES "user"("id")
          )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE list`);
    }

}
