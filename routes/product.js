import { Router } from "express";
var router = Router();
import { seller, goods, ratings } from "../data.json";

/* GET home page. */
router.get("/seller", function(req, res, next) {
  // res.render("index", { title: "Express" });
  res.send({ code: 200, data: seller });
});

router.get("/goods", function(req, res, next) {
  // res.render("index", { title: "Express" });
  res.send({ code: 200, data: goods });
});

router.get("/ratings", function(req, res, next) {
  // res.render("index", { title: "Express" });
  res.send({ code: 200, data: ratings });
});
export default router;
