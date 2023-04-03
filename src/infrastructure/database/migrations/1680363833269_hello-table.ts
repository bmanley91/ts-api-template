/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
    pgm.sql('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    pgm.createTable('hello', {
        id: {
            type: 'uuid',
            default: pgm.func('uuid_generate_v4()'),
            primaryKey: true
        },
        greeting: {
            type: 'varchar',
            notNull: true,
        },
        created_at: {
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
