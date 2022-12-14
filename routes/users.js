const { Router } = require("express");

const {
  usersGet,
  usersPut,
  usersPost,
  usersDelete,
} = require("../controllers/users");

const router = Router();

router.get("/", usersGet);

router.post("/", usersPost);

router.put("/:id", usersPut);

router.delete("/:id", usersDelete);

module.exports = router;

// lM0hTvVVl8HhrSTB
