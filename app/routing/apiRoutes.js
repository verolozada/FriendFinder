const friendsData = require("../data/friends");


module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        res.json(friendsData);
    });

    app.post("/api/friends", (req, res) => {
        // console.log("in post", req.body)
        const newFriend = req.body;
        // console.log(newFriend);
        const newScore = newFriend.scores;
        let match = {
            name: '',
            photo: '',
            score: 0
        };

        friendsData.forEach(friend => {
            let totalDiff = 0;
            newScore.forEach(position => {
                totalDiff += Math.abs(parseInt(friend.scores[position]) - parseInt(newScore[position]))
            });
            if (match.score == 0) {
                match.score = totalDiff;
                match.name = friend.name
                match.photo = friend.photo;
            } else if (totalDiff < match.score) {
                match.score = totalDiff
                match.name = friend.name;
                match.photo = friend.photo;
            }
        });
        friendsData.push(newFriend);
        res.json(match);
    });
};