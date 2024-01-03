const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/getHtml", (req, res) => {
    const htmlPath = path.join(__dirname, "../file/html/github_navbar/index.html");

    res.sendFile(htmlPath, (err) => {
        if(err) console.log(err);
    });
});

router.get("/getImage", (req ,res) => {
    const imagePath = path.join(__dirname, "../file/image/Kitchen/marble-kitchen.jpg");

    res.sendFile(imagePath, (err) => {
        if(err) console.log(err);
    });
});

router.get("/getTxt", (req, res) => {
    const txtPath = path.join(__dirname, "../file/text/simpleweb_arch.txt");

    res.sendFile(txtPath, (err) => {
        if(err) console.log(err);
    });
});

module.exports = router;