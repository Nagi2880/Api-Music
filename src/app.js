//Config from express
import express from 'express'
import Musicroutes from './routes/music.routes'
const app = express()
 
app.set('port', process.env.PORT || 3000)

app.get('/', (req, res) =>{
    res.json({message:'test'})
})
app.use('/api/tasks',Musicroutes)

export default app