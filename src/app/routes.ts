import { Router } from "express";
// *added* import for weather route
import auth from "../auth/route";
const router = Router();
// *change here to address routes*
router.use('/auth', auth);

export default router;