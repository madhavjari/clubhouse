const { Router } = require("express");
const signupController = require("../controller/signupController");
const { body } = require("express-validator");

const signupRouter = Router();

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters.";

const validateUser = [
  body("firstname")
    .trim()
    .isAlpha()
    .withMessage(`First name ${alphaErr}`)
    .isLength({ min: 3, max: 15 })
    .withMessage(`First name ${lengthErr}`),
  body("lastname")
    .trim()
    .isAlpha()
    .withMessage(`Last name ${alphaErr}`)
    .isLength({ min: 3, max: 15 })
    .withMessage(`Last name ${lengthErr}`),
  body("username")
    .trim()
    .isAlpha()
    .withMessage(`Last name ${alphaErr}`)
    .isLength({ min: 3, max: 15 })
    .withMessage(`Last name ${lengthErr}`),
  body("password")
    .isStrongPassword({
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
    .withMessage(
      "Please enter a password containing uppercase, lowercase, numbers, and symbols.",
    )
    .isLength({ min: 8, max: 20 })
    .withMessage("Password must be greater than 8 or less than 20"),
  body("confirm-password").custom((value, req) => {
    if (value !== req.body.password) {
      throw new Error("Passwords do not match");
    }
    return true;
  }),
];

signupRouter.get("/sign-up", signupController.getSignup);
signupRouter.post("/sign-up", validateUser, async (req, res) => {
  console.log(req.body);
  const errors = validationResult(req);
  console.log("err= ", errors);
  console.log(req.body);
  if (!errors.isEmpty()) {
    return res.status(400).render("signup", {
      title: "Sign-Up",
      errors: errors.array(),
    });
  }
  const { firstName, lastName, username, password } = matchedData(req);
  const hashedPassword = await bcrypt.hash(password, 10);
  // await db.addUser({ firstName, lastName, username, hashedPassword });
  res.redirect("/");
});

module.exports = signupRouter;
