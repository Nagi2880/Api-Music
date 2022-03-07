 //Only start the app
import app from './app'
//Import the database file to start it
import './database';
//Import 
app.listen(app.get('port'))
console.log('server on port', app.get('port'))