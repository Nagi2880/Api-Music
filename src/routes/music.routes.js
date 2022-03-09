import {Router} from 'express';
// (* as call all const as Songcontroller instead one by one)
import * as SongsController from '../controllers/Songscontroller'

const router = Router()

router.get('/',SongsController.findAllSongs);

router.post('/', SongsController.createSong)

export default router;