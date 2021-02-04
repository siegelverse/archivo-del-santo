const express = require('express')
require('./mongoose')
const cors = require('cors')
const userRouter = require('./routers/user')
const reviewRouter = require('./routers/review')
const path = require('path')

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

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('/buld'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    })
}

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})