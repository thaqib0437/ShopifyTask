import { Router } from 'express';
import { Item, Warehouse } from '../models/itemModel';

const addWarehouse = Router();

addWarehouse.get('/', (req, res) => {
    res.render("index", {addw: true})
})


addWarehouse.post('/',  (req, res) => {    
    const body = req.body
    Warehouse.create(body)
    .then(i => {
        res.render("index", {add: false, message: `Added Warehouse ${i.location}`})
    })
    .catch(e => {
        res.status(500).json(e.message)
    })
})


export default addWarehouse;

