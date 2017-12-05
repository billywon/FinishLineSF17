const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/../dist`));

// create flight table

app.get('/getUser', (req, res) => {
  // departure, destination, time, cost, preferences with general user info

});

app.get('/validateUser', (req, res) => {
  // return boolean value whether user match or not from airport

});

app.post('/alert', (req, res) => {
  // big blue airline flight schedule changes

  // push notification to user (brienna)

});

app.post('/reshedule', (req, res) => {

});

module.exports = app;
