const path = require("path")
const express = require("express")
const restler = require("restler")
const bodyParser = require("body-parser")
const webpack = require("webpack")
const config = require("./webpack.dev.js")

const app = express()
const compiler = webpack(config)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', function (req, res, next) {
  if (req.get("if-api")) next()
  else res.sendFile(path.join(__dirname, 'build/index.html'));
})

app.all("*", (req, res) => {
  const url = req.url
  const method = req.method
  const headers = req.headers
  const body = req.body
  restler.request("http://10.9.42.230:8443" + url, {
    method: method,
    headers: headers,
    data: JSON.stringify(body)
  })
    .on("success", data => res.send(data))
    .on("fail", (data, response) => {
      res.status(response.statusCode).send(data)
    })
})

app.listen(1337)