//Config from express
import express from 'express'
import morgan from 'morgan'
import Musicroutes from './routes/music.routes'
const app = express();

//Settings
app.set('port', process.env.PORT || 3000)
//Middlewares
app.use(morgan('dev'))
app.use(express.json());
// routes
app.get('/', (req, res) => {
    res.json({ message: 'test' })
})
app.use('/api/musics', Musicroutes)

export default app