//Config from express
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import Musicroutes from './routes/music.routes';
const app = express();

//Settings
app.set('port', process.env.PORT || 3000)
//Middlewares
app.use(cors)
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// routes
app.get('/', (req, res) => {
    res.json({ message: 'test' })
})
app.use('/api/musics', Musicroutes)

export default app