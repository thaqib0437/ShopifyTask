import { Router } from 'express';
import { Item, Warehouse } from '../models/itemModel';

const addItem = Router();

addItem.get('/', (req, res) => {
    Warehouse.find({})
    .then(warehouses => {
        res.render("index", {add: true, warehouses: warehouses})
    })
    .catch(e => res.status(401).send("Error Fetching Warehouses"))
})


addItem.post('/',  (req, res) => {    
    const body = req.body
    Item.create(body)
    .then(i => console.log("created"))
    .catch(e => {
        res.status(500).json(e.message)
    })
})


export default addItem; 
