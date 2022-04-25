import { Router } from 'express';

const addItem = Router();

addItem.get('/', (req, res) => {
    res.render("index", {add: true})
})


addItem.post('/',  (req, res) => {    
    console.log(req.body)
    res.render("index", {add: false, message: "Item added"})
})


export default addItem; 
