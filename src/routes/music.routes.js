import {Router} from 'express';
// (* as call all const as Songcontroller instead one by one)
import * as SongsController from '../controllers/Songscontroller'

const router = Router()

router.get('/',SongsController.findAllAnimes);

router.post('/', SongsController.createAnime)

router.get('/:id', SongsController.findOneAnime)

router.delete('/:id', SongsController.deleteAnime)

router.put('/:id', SongsController.updateAnime)


export default router;