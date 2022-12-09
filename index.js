const express = require('express')
const router = express.Router()
const cors = require('cors')
const path = require('path')
const serverless = require('serverless-http');
const app = express()
const port = 25727 
router.use(cors())
router.get("/", async(req,res) =>{
  res.sendFile(path.join(__dirname + "/Website/index.html"))
})
router.get("/docs", async (req, res) => {
  res.send('<meta http-equiv="refresh" content="0; URL=https://mrgamers11223s-organization.gitbook.io/docs/"/>')
})
router.get("*", async (req, res) => {
  res.status(404).sendFile(path.join(__dirname + "/public/404.html"))
})


app.listen(port, () => {
  console.log(`Example router listening on port ${port}!`)
  console.log("Press Ctrl+C to quit.")
})

module.exports = app
module.exports.handler = serverless(app)