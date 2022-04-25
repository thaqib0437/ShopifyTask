import "dotenv/config"

const DB_USER = process.env['MONGO_USER']
const DB_PASS = process.env['MONGO_DB_PASS']
const DB = process.env['DB']
const DB_URI = `mongodb+srv://${DB_USER}:${DB_PASS}@shopify.ssdaq.mongodb.net/${DB}?retryWrites=true&w=majority`


export default DB_URI
