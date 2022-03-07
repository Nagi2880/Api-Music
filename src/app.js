//Config from express
import express from 'express'
import Musicroutes from './routes/music.routes'
const app = express()
 
//Settings
app.set('port', process.env.PORT || 3000)

app.use(express.json());
// routes
app.get('/', (req, res) =>{
    res.json({message:'test'})
})
app.use('/api/musics',Musicroutes)

export default app