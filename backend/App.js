const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const authrouters = require('./routes/auth')

const app = express()
app.use(cors())
app.use(bodyParser.json())
const db = require('./db/db')
app.use('/api/auth',authrouters )

PORT = process.env.PORT

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.get('/' , (req,res)=>{
    res.send("hello world")
})

app.listen(PORT , ()=>{
    console.log(`Server has been started on http://localhost:${PORT}`)
})