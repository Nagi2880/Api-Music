import mongoose from 'mongoose'

 //Call a anonym function to start a await
(async () => {
    const db = await mongoose.connect('mongodb://localhost/AnimesongsAPI')
    console.log(`The name of the Database is ${db.connection.name}`);
})();