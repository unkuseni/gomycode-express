import express from "express";
const router = express.Router();

const __dirname = process.cwd();

router.use(express.static(__dirname + "/app/views"));
router.get("/", (req, res) => {
	res.sendFile(__dirname + "/app/views/home.html");
});

router.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/app/views/contact.html");
});

router.get("/home", (req, res) => {
	res.sendFile(__dirname + "/app/views/home.html");
});

router.get("/services", (req, res) => {
  res.sendFile(__dirname + "/app/views/services.html");
})


export default router;
