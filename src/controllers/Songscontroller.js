import Anime from '../models/Anime';
import {getPagination} from '../libs/getPagination'
export const findAllAnimes = async (req, res) => {
    
    const {size, page, animename} = req.query

    //Search in the route, a anime by your name
    const condition = title ? {
        animename: {$regrex: new RegExp(title), $options: "i"}
    }:  {}

    const {limit, offset } = getPagination(page, size)

    const Animes = await Anime.paginate({condition}, { offset, limit})
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

export const updateAnime = async (req,res) =>{
   const updatedAnime = await Anime.findByIdAndUpdate(req.params.id, req.body)
   res.json({ message: "Anime was updated or Song has been added succesfully"})
}