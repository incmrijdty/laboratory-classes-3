const express = require("express");
const { MENU_LINKS } = require("../constants/navigation");
const { productsSlice } = require("../store/products"); 
const router = express.Router();


router.get("/", (_request, response) => {
  response.render("products", {
    headTitle: "Shop – Products",
    path: "/products",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products",
    products: productsSlice.products 
  });
});


router.get("/add", (_request, response) => {
  response.render("add-product", {
    headTitle: "Shop - Add product",
    path: "/products/add",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products/add"
  });
});


router.post("/add", (request, response) => {
  const { name, description } = request.body;

  
  const newProduct = { name, description };
  productsSlice.products.push(newProduct);
  productsSlice.newestProduct = newProduct;

  response.redirect("/products/new");
});


router.get("/new", (_request, response) => {
  const newestProduct = productsSlice.newestProduct;
  response.render("new-product", {
    headTitle: "Shop – Newest product",
    path: "/products/new",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/products/new",
    newestProduct: newestProduct ? newestProduct : "No data available" 
  });
});

module.exports = router;
