const express = require('express')
const app = express();
const port = 8081;

app.get('/abc', (req, res) => {
    res.send('Hello Word!')
})

app.use((req, res)=>{
    res.status(404).send('404 not found')
})

app.listen(port, () => {
    console.log(`Express app listening at localhost:${port}`)
})