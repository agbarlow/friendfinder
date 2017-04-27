// Load Friends Array

var friends = require("../data/friends.js");



module.exports = function(app) {

 app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


var bestMatch = {name: "", photo: "", total: 100};
var difference = 0;

app.post("/api/friends", function(req, res) {
   var newFriend = req.body;
//	console.log(friends[0].scores[0]);
  // console.log(newFriend);
 //  console.log(bestMatch);
 //  console.log(friends.length);
   
 

   for (i=0; i < friends.length; i++) {
   		difference = 0;
   		for (y=0; y < 9; y++) {
    		difference = difference + Math.abs(friends[i].scores[y] - newFriend.scores[y])
    						}
    						//console.log(difference);
    		if (difference < bestMatch.total) {
    			bestMatch.name = friends[i].name;
    			bestMatch.photo = friends[i].photo;
    			bestMatch.total = difference
    			
    			}	
  
    	}	
  res.json(bestMatch);
    });

}


