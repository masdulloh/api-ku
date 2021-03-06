require("dotenv").config();
const express = require("express");
const app = express();
const rajaRouter = require("./api/rajaongkir/rajaongkir.router");
const port = process.env.PORT || 4000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "*");
    next();
  });
  
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/raja-ongkir", rajaRouter);

app.listen(port, ()=>{
    console.log("app is running in port ", port);
});
