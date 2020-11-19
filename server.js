const fs = require('fs');
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

dotenv.config();

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

//routes
fs.readdirSync('./routes').map((route) =>
  app.use('/api', require('./routes/' + route))
);

//error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {},
  });
});

const PORT = process.env.PORT || 5000;
const server = app.listen(
  PORT,
  console.log(`Server started at ${process.env.NODE_ENV} at Port: ${PORT}`)
);

//Handle unHandle Rejection
process.on('unHandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => process.exit(1));
});
