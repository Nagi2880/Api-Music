import { Schema, model } from "mongoose";

const animeSchema = new Schema({
    animename: {
        type: String,
        required: true,
        trim: true,
    },
    japanname: {
        type: String,
        trim: true,
    },
    director: {
        type: String,
        required: true,
        trim: true
    },
    songs:{
        albumname:{
            type:String,
            required:true,
            trim:true
        },
        openingname:{
            type:String,
            required:true,
            trim:true
        },
        author:{
            type: String,
            required: true,
            trim: true
        }
    }
},{
    versionKey: false,
    timestamps: true
});

export default model("Anime",animeSchema)