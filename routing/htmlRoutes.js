var path = require("path");

module.exports = function(app){

    //routes
    //__dirname prints out the locatoin of the file/folder

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});
};

