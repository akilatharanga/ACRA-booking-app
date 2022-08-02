const express = require('express')
const app = express()

app.listen(process.env.PORT || 8800, () => {
    console.log('Connected to backend')
})