require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');


app.use(express.static('./public'));
app.use(express.json());

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


const start = async () => {
  try {
    app.listen(process.env.PORT, process.env.HOST,() =>
      console.log(`Server is listening at: http://${process.env.HOST}:${process.env.PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
