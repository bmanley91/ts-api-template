/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
    pgm.createTable('hello', {
        id: 'id',
        name: {
            type: 'varchar',
            notNull: true
        },
        createdAt: {
            type: 'timestamp',
            notNull: true,
            default: pgm.func('current_timestamp'),
        }
    });
}

export async function down(pgm: MigrationBuilder): Promise<void> {
    pgm.dropTable('hello', {
        ifExists: true
    });
}
