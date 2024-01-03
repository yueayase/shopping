const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

// 商品列表
router.get("/", (req, res) => {
    //res.send(res.locals.category);
    const productFilePath = path.join(__dirname, 
        "../data/".concat(res.locals.category, ".json"));
    
    fs.readFile(productFilePath, (err, data) => {
        if(err) console.log(err);

        const products = JSON.parse(data.toString());
        const pass_products = products.map((data) => {
            return {
                "id": data.id,
                "title": data.title,
                "content": data.content.join(""),
                "price": data.price,
                "publish": data.publish,
                "url": data.url,
                "image-name": data["image-name"],
                "category": res.locals.category,
            }
        });

        res.render("products", {
            products: pass_products,
            backUrl: "/"
        });
    });
});

// 顯示單個商品
router.get("/:id", (req, res) => {
    const productFilePath = path.join(__dirname, 
        "../data/".concat(res.locals.category, ".json"));
    const id = req.params.id;

    fs.readFile(productFilePath, (err, data) => {
        //res.send(products[id]);
        if(err) console.log(err);

        const products = JSON.parse(data.toString());

        res.render("product", {
            product: products[id],
            category: res.locals.category,
            backUrl: "/".concat(res.locals.category)
        });
    });

});

module.exports = router;