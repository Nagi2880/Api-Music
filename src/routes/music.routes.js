import {Router} from 'express';
import Anime from '../models/Anime';


const router = Router()

router.get('/', (req, res) => {
    res.send('Musics')
})

router.post('/', async (req,res) =>{
    const newAnime = new Anime({
        animename: req.body.animename,
        japanname: req.body.japanname,
        director: req.body.director,
        songs: req.body.songs,
        })
    const animeSaved = await newAnime.save();
    res.json(animeSaved)

})

export default router;