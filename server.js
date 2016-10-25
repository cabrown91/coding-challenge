// require express and other modules
var express = require('express'),
    app = express();









/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

//landing page serves up html file
app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/cabrown91/coding-challenge",
    // baseUrl: "https://stark-dawn-84023.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/talks", description: "Data about talks"},
      {method: "GET", path: "/api/attendees", description: "Data about attendees"},
    ]
  });
});





















/**********
 * SERVER *
**********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
