import { Schema, model } from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'
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
            type:Array,
            required:true,
            trim:true
        },
        openingname:{
            type:Array,
            required:true,
            trim:true
        },
        author:{
            type: Array,
            required: true,
            trim: true
        }
    }
},{
    versionKey: false,
    timestamps: true
});
animeSchema.plugin(mongoosePaginate);
export default model("Anime",animeSchema)