const User = require("../models/user");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

const authUser = (req, res, next) => {
  const { name, password } = req.body;

  // Simple validation
  if (!name || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  // Check for existing user
  User.findOne({ name }).then((user) => {
    if (!user) return res.status(400).json({ msg: "User does not exist" });
 
      // Validate password
      bcrypt.compare(password, user.password)
      .then(isMatch => {
        if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials'});

        jwt.sign(
          { id: user.id },
          config.get("jwtSecret"),
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({
              token,
              user: {
                id: user.id,
                name: user.name,
              },
            });
          }
        );
      })
   
  });
};

//@route    GET api/users/auth/user
//@desc     Get usar data
//@access   Private

const getUser = (req, res, next) => {
  User.findById(req.user.id)
  .select('-password')
  .then(user => res.json(user));
};

exports.authUser = authUser;
exports.getuser = getUser;
