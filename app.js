const connectDB = require("./db/connect")
const express = require("express")
const app = express()
const path = require("path")
const billRouter = require("./routers/bills")
require("dotenv").config()

const port = 5000


// middlewares
app.use(express.static("./public"))
// parses incoming requests with JSON payloads and is based on body - parser.
app.use(express.json())


// routes
app.use("/api/v1/bills", billRouter)


app.get("/bills", (req, res) => {
})

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        // start server
        app.listen(port, () => {
            console.log(`server is listening on port ${port}`)
        })
    } catch (error) {
        console.log(`connection failed with error ${error}`);
    }
}

start()

