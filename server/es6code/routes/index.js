import express from 'express';
import homePage from '../controllers/index';

const router = express.Router();

/* GET home page. */
router.get('/', homePage);

export default router;
