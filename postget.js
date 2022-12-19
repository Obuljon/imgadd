import data from "./database.js"
import { Router } from "express";
import { extname, dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { unlinkSync, renameSync } from "fs"

const router = new Router()

    router.get("/", async (req, res) => {
        const datas = await data.find();
        res.render("layout", { datas })
    })
    router.post("/", (req, res) => {
        const ext = extname(req.file.originalname)
        req.body.img = req.file.filename + ext
        renameSync(resolve(dirname(fileURLToPath(import.meta.url)), "public/img/" + req.file.filename),
                   resolve(dirname(fileURLToPath(import.meta.url)), "public/img/" + req.file.filename + ext)
        );

        console.log(req.body.img)

        data.create(req.body);
        res.redirect("/");
    })
export default router;



