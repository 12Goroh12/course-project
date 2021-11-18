const express = require('express')
const app = express()

const cors = require('cors')
const userRoute = require('./routes/User')
const categoryRoute = require('./routes/Category')
const uploadRoute = require('./routes/Upload')
const postsRoute = require('./routes/Posts')

app.use(cors())
app.use(express.json())
app.use('/user', userRoute)
app.use('/category', categoryRoute)
app.use('/upload', uploadRoute)
app.use('/posts', postsRoute)


app.listen(5000, () => {
	console.log('Runn port 5000');

})