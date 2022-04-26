import express from "express";
import {connect} from "mongoose"
import bodyParser from "body-parser";
import morgan from "morgan";
import DB_URI from "./conf/DB";

import manage from "./routes/manage";
import addItem from "./routes/addItems";
import undoDelete from "./routes/undoDelete";


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
app.use("/manage", manage)
app.use("/undoDelete", undoDelete)


connect(DB_URI, () => {
    app.listen(PORT);
})