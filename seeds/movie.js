const movie = require('../movie');

exports.seed = function (knex, Promise) {
  return knex('movie')
    .del()
    .then(function () {
      return knex('movie').insert(movie);
    });
};
