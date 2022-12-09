const express = require('express')
const app = express();
const cors = require('cors')
const path = require('path')
const serverless = require('serverless-http');

const port = 3000   
app.use(cors())
app.get("/", async(req,res) =>{
  res.sendFile(path.join(__dirname + "/Website/index.html"))
})
app.get("/docs", async (req, res) => {
  res.send('<meta http-equiv="refresh" content="0; URL=https://mrgamers11223s-organization.gitbook.io/docs/"/>')
})
app.get("*", async (req, res) => {
  res.status(404).sendFile(path.join(__dirname + "/public/404.html"))
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
  console.log("Press Ctrl+C to quit.")
})
serverless(app)