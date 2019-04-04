var path = require("path");

var friendData = require("../app/data/friends");

module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        res.json(friendData);


    });
    app.post("/api/friends", function (req, res) {

        //grabs userInput scores to compare w/ friends in friendCount array
        var userInput = req.body;
        var bestMatch;
        var totalDifference = 1000

        //runs the current friends in data
        //algorithm
        for (var i = 0; i < friendData.length; i++) {
            var diff = 0;


            for (var m = 0; m < friendData[i].scores.length; m++) {
                //math.abs minusing one score from another, youre not getting a -#
                diff += Math.abs(parseInt(userInput.scores[m]) - parseInt(friendData[i].scores[m]));
            }

            if (diff < totalDifference) {
                totalDifference = diff;
                bestMatch = friendData[i]
            }


        }



        friendData.push(userInput);
        res.json(bestMatch);

    });
};
//console.log(newfriendly);
//tables.push(newfriendly);





