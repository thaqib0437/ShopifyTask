import express from "express";
import {connect} from "mongoose"
import bodyParser from "body-parser";
import morgan from "morgan";
import path from "path";
import addItem from "./routes/addItems";
import DB_URI from "./conf/DB";
import { Item } from "./models/itemModel";


const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan("dev"))
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.get("/", (req, res) => {
    res.render("index")
})


app.use("/addItem", addItem)


connect(DB_URI, () => {
    console.log("Connected to DB")
    app.listen(PORT, () => {
        console.log("Server started")
        console.log(`Listening on: http://localhost:${PORT}/`)
});

})