import express from "express";
import "dotenv/config"
import bodyParser from "body-parser";
import morgan from "morgan";
import path from "path";
import addItem from "./routes/addItems";


const app = express();
const PORT = process.env.PORT || 3001;

app.use(morgan("dev"))



app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.render("index")
})

app.use("/addItem", addItem)


app.listen(PORT, () => {
    console.log("Server started")
    console.log(`Listening on: http://localhost:${PORT}/`)
});
