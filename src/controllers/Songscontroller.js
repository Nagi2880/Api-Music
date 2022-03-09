import Anime from '../models/Anime';

export const findAllAnimes = async (req, res) => {
    const Animes = await Anime.find()
        res.json(Animes)}

export const createAnime = async (req,res) =>{
    const newAnime = new Anime({
        animename: req.body.animename,
        japanname: req.body.japanname,
        director: req.body.director,
        songs: req.body.songs,
        })
    const animeSaved = await newAnime.save();
    res.json(animeSaved)
}

export const findOneAnime = async (req,res) =>{
    const anime = await Anime.findById(req.params.id)
    res.json(anime)
}

export const deleteAnime = async (req,res) =>{
    const data = await Anime.findByIdAndDelete(req.params.id)
    res.json({
        message: `${data.id} Anime was deleted`
    })
}