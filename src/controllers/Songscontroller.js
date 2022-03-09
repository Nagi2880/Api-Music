import Anime from '../models/Anime';

export const findAllSongs = async (req, res) => {
    const Animes = await Anime.find()
        res.json(Animes)}

export const createSong = async (req,res) =>{
    const newAnime = new Anime({
        animename: req.body.animename,
        japanname: req.body.japanname,
        director: req.body.director,
        songs: req.body.songs,
        })
    const animeSaved = await newAnime.save();
    res.json(animeSaved)
}