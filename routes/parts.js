const { Router } = require("express");

const {
  partsGet,
  partsPost,
  partsPut,
  partsDelete,
} = require("../controllers/parts");

const router = Router();

router.get("/", partsGet);

router.post("/", partsPost);

router.put("/:id", partsPut);

router.delete("/:id", partsDelete);

module.exports = router;

// lM0hTvVVl8HhrSTB
