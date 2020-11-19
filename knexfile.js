// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://postgres:123@localhost:5432/movie',
  },
  test: {
    client: 'pg',
    connection: 'postgres://postgres:123@localhost:5432/test-movie',
  },
};
