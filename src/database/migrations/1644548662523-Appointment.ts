import { MigrationInterface, Table, QueryRunner } from "typeorm";

export class Appointment1644548662523 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'appointments',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                    },
                    {
                        name: 'doctorId',
                        type: 'int',

                    },
                    {
                        name: 'patientId',
                        type: 'int',
                    },
                ],


            })
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('appointments');
    }

}
