const { restart } = require("nodemon");
const User = require("../models/User.js");
exports.createUser = async (req, res) => {
  // console.log("LOL");

  const { name, email, password } = req.body;
  // console.log(name);
  // console.log(email);
  // console.log(password);

  const user = await User.create({ name, email, password });

  res.status(200).json({ user }); //200 = ok
};
