import { Router } from 'express';
import { Item } from '../models/itemModel';

const addItem = Router();

addItem.get('/', (req, res) => {
    res.render("index", {add: true})
})


addItem.post('/',  (req, res) => {
    const body = req.body
    Item.create(body)
    .then(item => {
        res.status(201).render("index", {add: false, message: `Added Item ${item.name}`})
    })
    .catch(e => {
        res.status(500).json(e.message)
    })
})


export default addItem;
