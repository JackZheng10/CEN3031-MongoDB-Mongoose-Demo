const User = require("../models/User");

const getInfo = (req, res) => {
  User.findById("")
    .then((user) => {
      if (!user) {
        return res.json({
          message: "User not found",
        });
      } else {
        return res.json({
          message: "User found: " + user.name + ", " + user.email,
        });
      }
    })
    .catch((error) => {
      return res.json({
        message: "Error: " + error,
      });
    });
};
