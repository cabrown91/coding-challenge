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
    message: "Conferences App API",
    documentationUrl: "https://github.com/cabrown91/coding-challenge",
    // baseUrl: "https://stark-dawn-84023.herokuapp.com/",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/talks", description: "Data about talks"},
      {method: "GET", path: "/api/attendees", description: "Data about attendees"},
    ]
  });
});


app.get('/talks', function(req, res) {
  res.json({
    talks: [
      {
        "title": "AD IPSUM",
        "abstract": "Fugiat nisi et mollit consequat sint.",
        "room": 343,
        "speaker": {
          "name": "Melody Juarez",
          "company": "Zillatide",
          "email": "melodyjuarez@zillatide.com",
          "bio": "Veniam do eu quis officia enim."
        }
      },
      {
        "title": "CILLUM NON",
        "abstract": "Aliqua consequat mollit Lorem dolor nulla qui sunt tempor veniam eiusmod ullamco quis commodo.",
        "room": 873,
        "speaker": {
          "name": "Hendrix Carroll",
          "company": "Songlines",
          "email": "hendrixcarroll@songlines.com",
          "bio": "Magna velit adipisicing ullamco sint duis nisi."
        }
      }]
  });
});


app.get('/attendees', function(req, res) {
  res.json({
    "attendees": [
      {
        "name": "Sanders Riley",
        "company": "Comtext",
        "email": "sandersriley@comtext.com",
        "registered": "2015-05-24T02:15:04 +07:00"
      },
      {
        "name": "Bean Cline",
        "company": "Utarian",
        "email": "beancline@utarian.com",
        "registered": "2015-06-21T02:54:39 +07:00"
      },
      {
        "name": "Alfreda Mitchell",
        "company": "Dreamia",
        "email": "alfredamitchell@dreamia.com",
        "registered": "2015-09-22T06:35:29 +07:00"
      }
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
