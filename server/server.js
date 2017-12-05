const app = require('./server-config');
const port = 8888;

app.listen(port, function() {
  console.log(`this server is listening on the port ${port}`);
});
