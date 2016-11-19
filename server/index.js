import express from 'express'
import path from 'path'

const app = express()

app.get('*', (req,res)=> {
  res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(8080, ()=> {
  console.log('runing on your favorite localhost:8080');
})
