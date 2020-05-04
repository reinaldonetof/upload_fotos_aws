const router = require("express").Router();
const multer = require("multer");
const multerConfig = require("./config/multer");

router.get("/", (req, res) => {
  return res.json({ hello: "World" });
});
router.post("/posts", multer(multerConfig).single("file"), (req, res) => {
  console.log(req.file);
  return res.json({ hello: "World" });
});

module.exports = router;
