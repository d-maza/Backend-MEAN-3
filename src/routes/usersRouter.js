const { Router } = require("express");
const router = Router();
const usersCtrl = require("../controllers/usersController");


// Routes User
router.post("/register", usersCtrl.register_user);
router.post("/login", usersCtrl.login_users);
router.put("/update", usersCtrl.update_user);


module.exports = router;
