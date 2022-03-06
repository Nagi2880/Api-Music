import {Router} from 'express'

const router = Router()

router.get('/musics', (req, res) => {
    res.send('Musics')
})
export default router;