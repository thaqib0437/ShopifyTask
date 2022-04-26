import { Router } from "express";
import { deleteRecord } from "../models/deletionModel";
import { Item } from "../models/itemModel";

const manage = Router()
manage.get("/", (req, res) => {
    Item.find({}).then(
        items => {
            res.render("index", {manage: true, items: items})
        }
    )
    .catch(
        _ => res.status(404).json("database error.")
    )
})

manage.get("/:code", (req, res) => {
    const itemCode = req.params.code
    Item.findOne({code: itemCode}).then(
        item => {
            res.render("index", {update: true, curritem: item, code: item?.code})
        }
    )
    .catch(
        _ => res.status(404).json("database error.")
    )
})

manage.post("/:code/edit", (req, res) => {
    const body = req.body
    const code = req.params.code
    Item.findOneAndUpdate({code: code}, body)
    .then(
        v => {
            if (v) {
                res.redirect("/manage")
            }
            else{
                res.status(404).json("failed to update item")
            }
        }
    )
    .catch(
        _ => res.status(404).json("Error Failed to update")
    )
})

manage.post("/:code/delete", (req, res) => {
    const code = req.params.code
    const {comment} = req.body
    Item.findOneAndDelete({code: code})
    .then(item => {
        if(item){
            deleteRecord.create({code: item.code, comment: comment, itemData: item })
                .then(_ => {
                    res.redirect("/manage")
                })
        }
        else{
            res.status(404).json("failed to delete item")
        }
    })
})

export default manage;