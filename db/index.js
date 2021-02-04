const express = require('express')
require('./mongoose')
const cors = require('cors')
const userRouter = require('./routers/user')
const reviewRouter = require('./routers/review')

const app = express()
const port = process.env.PORT



const multer = require('multer')
const upload = multer({
    dest: 'images'
})
app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
})

app.use(express.json())
app.use(cors())
app.use(userRouter)
app.use(reviewRouter)

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})