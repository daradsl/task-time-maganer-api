import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterUserEntityPasswordToNullable1724195315072 implements MigrationInterface {
    name = 'AlterUserEntityPasswordToNullable1724195315072'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "password" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "password" SET NOT NULL`);
    }

}
