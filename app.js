const express = require("express");
const app = express();
const engine = require("express-handlebars").engine;

// 設定樣板引擎
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');


// 使用靜態資源
app.use("/static", express.static("public"));

// 使用routere管理路徑
app.use("/", require("./routes"));

app.listen(3000, () => {
    console.log("Test My ideas.")
});