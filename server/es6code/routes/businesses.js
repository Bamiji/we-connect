import express from 'express';
import { createBusiness, updateBusiness, deleteBusiness, viewBusiness, viewAllBusinesses, addReview, viewReview } from '../controllers/businesses';

const router = express.Router();

router.get('/', viewAllBusinesses);
router.post('/', createBusiness);

router.get('/:businessId', viewBusiness);
router.put('/:businessId', updateBusiness);
router.delete('/:businessId', deleteBusiness);

router.get('/:businessId/reviews', viewReview);
router.post('/:businessId/reviews', addReview);

export default router;
