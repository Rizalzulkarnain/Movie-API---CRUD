const Knex = require('knex');

exports.up = function (knex) {
  return knex.schema.createTable('movie', (table) => {
    table.increments('id');
    table.string('title');
    table.string('description');
    table.float('rating');
    table.string('url');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTabloe('movie');
};
