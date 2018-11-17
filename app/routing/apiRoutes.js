const friendsData = require("../data/friends");
// const multer = require('multer'); // v1.0.5
// const upload = multer(); // for parsing multipart/form-data

module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        res.json(friendsData);
    });

    app.post("/api/friends", (req, res) => {
        console.log("in post",req.body)
        friendsData.push(req.body);
        res.json(req.body);
    });
    // app.post('/api/friends', upload.array(), function (req, res, next) {
    //     console.log(req.body);
    //     res.json(req.body);
    // });
};