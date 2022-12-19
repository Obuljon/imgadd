import { dirname } from "path";
import { fileURLToPath } from "url";
import express from "express";
import layout from "express-ejs-layouts";
import { connect } from "mongoose";
import multer from "multer"
import router from "./postget.js"

const app = express();
connect("mongodb://localhost/farma", { useNewUrlParser:true, useUnifiedTopology:true });

app.set("view engine", "ejs");
app.use(express.static(`${dirname(fileURLToPath(import.meta.url))}/public`));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(layout);
app.use(multer({dest: 'public/img'}).single('img'));

app.use(router);

app.listen(8080, () => {
    console.log("server in run port:8080")
})





