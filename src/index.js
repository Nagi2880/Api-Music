 //Only start the app
import app from './app'

app.listen(app.get('port'))
console.log('server on port', app.get('port'))