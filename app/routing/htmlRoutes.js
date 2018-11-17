const path = require("path");


module.exports = (app) => {
    //route for the survey.html
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    //home.html will be the default, also in case no other route is found
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};