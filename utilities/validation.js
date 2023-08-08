const { check, validationResult } = require("express-validator");

exports.validateUser = [
  check("name", "Enter a valid name").isLength({ min: 3 }),
  check("email", "Enter a valid email").isEmail(),
  check("password", "Enter a valid password").isLength({ min: 2 }),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    next();
  },
];
