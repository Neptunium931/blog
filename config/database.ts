import app from '@adonisjs/core/services/app'
import { defineConfig } from '@adonisjs/lucid'
import env from '#start/env'

let dbConfig

if (env.get('DB_CONNECTION') === 'sqlite') {
  dbConfig = defineConfig({
    connection: 'sqlite',
    connections: {
      sqlite: {
        client: 'better-sqlite3',
        connection: {
          filename: app.tmpPath('db.sqlite3')
        },
        useNullAsDefault: true,
        migrations: {
          naturalSort: true,
          paths: ['database/migrations'],
        },
      },
    },
  })
} else {
  dbConfig = defineConfig({
    connection: 'postgres',
    connections: {
      postgres: {
        client: 'pg',
        connection: {
          host: env.get('DB_HOST'),
          port: env.get('DB_PORT'),
          user: env.get('DB_USER'),
          password: env.get('DB_PASSWORD'),
          database: env.get('DB_DATABASE'),
        },
        migrations: {
          naturalSort: true,
          paths: ['database/migrations'],
        },
      },
    },
  })
}

export default dbConfig
