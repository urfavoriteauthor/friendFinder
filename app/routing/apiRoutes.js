

var friendData = require("../data/friends");




module.exports = function(app) {
 

  app.get("/data/friends", function(req, res) {
    res.json(friendsArray);
  });


  app.post("/data/friends", function(req, res) {

    if (friendsArray.length < 5) {
      friendsArray.push(req.body);
      res.json(true);
    }
    else {
      res.json(false);
    }
  });


  app.post("/api/clear", function(req, res) {
    friendsArray.length = 0;

    res.json({ ok: true });
  });
};
