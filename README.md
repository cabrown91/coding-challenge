#Coding Challenge

##Objective
To design a RESTful JSON API for data for talks at a conference and attendees for GACon.

##Features Included
###API endpoints:
1. /api/talks (a route to get a list of all talks at the conference)
2. /api/attendees (a route to get a list of all attendees at the conference (independently of talks))


###Technologies Used
1. Node.js (to serve the data)
2. Express.js (to build API routes)

##Instructions
###To View on Heroku
1. Navigate to https://whispering-hollows-37604.herokuapp.com in your browser
2. Navigate to https://whispering-hollows-37604.herokuapp.com/api/talks to view the list of all talks at the conference
3. Navigate to https://whispering-hollows-37604.herokuapp.com/api/attendees to view the list of all attendees a the conference

###To Run Locally
1. Clone the repo
2. Run ```npm install``` in your terminal to install dependencies (Node.js and Express.js)
3. run ```nodemon``` in your terminal to run the server
4. Navigate to Localhost:3000 in your browser
5. Navigate to Localhost:3000/api/talks to view the list of all talks at the conference
6. Navigate to Localhost:3000/api/attendees to view the list of all attendees a the conference
