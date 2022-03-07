import { Schema, model } from "mongoose";

const songSchema = new Schema({
    songname: {
        type: String,
        required: true,
        trim: true,
    },
    japanname: {
        type: String,
        trim: true,
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
},{
    versionKey: false,
    timestamps: true
});

export default model("Song",songSchema)