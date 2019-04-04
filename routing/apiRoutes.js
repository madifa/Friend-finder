var path = require("path");

var friendData = require("../app/data/friends");

module.exports = function(app){

    
app.get("/api/friends", function(req, res) {
    res.json(friendData);


});
app.post("/api/friends", function(req, res) {

    //grabs userInput scores to compare w/ friends in friendCount array
    var userInput = req.body;
    console.log(userInput);
    var scores = userInput.scores;
    console.log(scores);
    var bestMatch = 0;

    //runs the current friends in data
    //algorithm
for(var i=0; i<friendData.length; i++){
    var scoresDiff = 0;
    
    
for(var m=0; m<scores.length; m++){
    //math.abs minusing one score from another, youre not getting a -#
scoresDiff += Math.abs(parseInt(friendData[i].scores[m])- parseInt(userInput[m]));
}
}

    for(var i=0; i<scores.length; i++){
        if(scores[i] <= scores[bestMatch]){
            bestMatch = i;
        }
    }

    var b = friendData[bestMatch];
    res.json(b);

friendData.push(req.body);

});
};
//console.log(newfriendly);
//tables.push(newfriendly);





