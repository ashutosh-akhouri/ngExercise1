const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/dist/ngEx1'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/ngEx1/index.html');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})