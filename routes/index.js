const express = require("express");
const router = express.Router();

// https://stackoverflow.com/questions/19793723/can-i-send-data-via-express-next-function
const GameTable = (req, res, next) => {
    res.locals.category = "GameTable";
    next();
};

const Kitchen = (req, res, next) => {
    res.locals.category = "Kitchen";
    next();
};

const LivingRoom = (req, res, next) => {
    res.locals.category = "LivingRoom";
    next();
};

router.get("/", (req, res) => {
    res.render("home");
});

router.use("/GameTable", GameTable, require("./product"));
router.use("/Kitchen", Kitchen, require("./product"));
router.use("/LivingRoom", LivingRoom, require("./product"));

router.use("/file", require("./file"));

router.get("/*", (req, res) => {
    res.send("Not found");
});

module.exports = router;