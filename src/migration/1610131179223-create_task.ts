import {MigrationInterface, QueryRunner} from "typeorm";

export class createTask1610131179223 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "task" (
            "id"          SERIAL PRIMARY KEY,
            "created"     TIMESTAMP  NOT NULL DEFAULT NOW(),
            "description" TEXT       NOT NULL,
            "dueTo"       TIMESTAMP  NULL,
            "starred"     BOOLEAN    NOT NULL DEFAULT false,
            "done"        BOOLEAN    NOT NULL DEFAULT false,
            "user_id"     INT NOT NULL REFERENCES "user"("id"),
            "list_id"     INT NOT NULL REFERENCES "list"("id")
          )`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE task`);
    }

}
