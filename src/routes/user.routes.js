const { Router } = require("express");
const { userRegister, getUser } = require("../controllers/user.controllers");
const { getAllUser } = require("../controllers/user.controllers");




const router = Router();

router.post("/users", userRegister)
router.get("/users", getAllUser)
router.get("/users/{id}", getUser)




module.exports = router;
