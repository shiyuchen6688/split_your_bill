require("./db/connect.js")
const express = require("express")
const app = express()
const path = require("path")
const billRouter = require("./routers/bills")
const port = 5000


// middlewares
app.use(express.static("./public"))
// parses incoming requests with JSON payloads and is based on body - parser.
app.use(express.json())


// routes
app.use("/api/v1/bills", billRouter)


app.get("/bills", (req, res) => {
})



// start server
app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})