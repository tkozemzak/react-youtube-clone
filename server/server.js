const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();
const PORT = 5000;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }).single("file");

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.sendStatus(500);
    }
    res.send(req.file);
    console.log("Uploaded File:", req.file);
  });
});
app.get("/uploads/:filename", (req, res) => {
  res.send();
});

app.use(express.static("uploads"));
app.use(cors());
app.listen(PORT, () => {
  console.log("Listening on ", PORT);
});
