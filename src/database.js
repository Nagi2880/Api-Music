import mongoose from 'mongoose'
import config from './config'

 //Call a anonym function to start a await
(async () => {
    try{
        const db = await mongoose.connect(config.mongodbURL);
        console.log(`Database connected to ${db.connection.name}`);
    }catch (error){
        console.error(error);
    }
})();