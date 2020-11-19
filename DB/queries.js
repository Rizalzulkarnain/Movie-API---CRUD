const knex = require('./knex');

module.exports = {
  getAll(query) {
    const knexQuery = knex('movie');

    if (query.title) {
      knexQuery.where('title', 'like', `%${query.title}%`);
    }

    if (query.description) {
      knexQuery.where('description', 'like', `%${query.description}%`);
    }

    return knexQuery;
  },
  getOne(id) {
    return knex('movie').where('id', id).first();
  },
  create(movie) {
    return knex('movie').insert(movie, '*');
  },
  update(id, movie) {
    return knex('movie').where('id', id).update(movie, '*');
  },
  delete(id) {
    return knex('movie').where('id', id).delete();
  },
};
