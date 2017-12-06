const express = require('express');
const app = express();
const keys = require('./../config.js');
// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
var client = require('twilio')(keys.accountSid, keys.authToken);

client.messages.create({
    body: "Your flight has been cancelled. If you like to reschedule, go to app!",
    to: "+14154179136",
    from: "+15407798955"
}).then((message) => console.log(message.sid));

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
