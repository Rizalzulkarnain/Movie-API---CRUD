Express, KnexJS, Postgres


##Step##

- create DB on Postgres.
- `npm install knex pg`.
- run `npm install -g knex` and run `knex init`.
- run migration `knex migrate:make databe_name`.
- run `knex migrate:latest`.
- create folder seeds and file database_name and run `knex seed:make database_name`.
- create database connection and queries, knex and queries file on folder db.
