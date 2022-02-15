import { MigrationInterface, Table, QueryRunner } from "typeorm";

export class Patients1644548971967 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'patients',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                ]
            }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('patients');
    }

}
