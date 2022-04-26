import { Router } from "express";
import { Item } from "../models/itemModel";
import { deleteRecord } from "../models/deletionModel";
import mongoose from "mongoose";


const undoDelete = Router()
undoDelete.get("/", (req, res) => {
    deleteRecord.find()
    .then(deleteRecords => {
        res.render("index", {delete: true, deleteRecords: deleteRecords})
    })
    .catch(_ => res.status(404).json("Error Fetching Delete records"))
})

undoDelete.get("/:code", (req, res) => {
    const code = req.params.code
    deleteRecord.findOneAndDelete({code: code})
    .then(dr => {
        if(dr !== null){
            // TODO: Recommend update
            const item = new Item(dr.itemData)
            item._id = new mongoose.Types.ObjectId()
            item.isNew = true
            item.save()
            .then(_ => {
                res.redirect("/manage")
            })
            .catch(e => {
                res.status(400).json({error: e.message})
            })
        }
        else{
            res.status(404).json("Error Undoing delete")
        }
    })
    .catch(_ => res.status(404).json("Error Undoing delete"))
})

export default undoDelete;