import { Router } from "express";
import { addComplex,getComplexDetails,showAllComplex } from "../Controllers/sportcomplexs.controller";
import isManager from "../Middlewares/isManager";
import isAuthenticated from "../Middlewares/isAuthenticated";
import isUser from "../Middlewares/isUser";
import isAdmin from "../Middlewares/isAdmin";
import { bookComplex, seeAvailability } from "../Controllers/booking.controller";

const router = Router();

router.post("/addComplex",isAuthenticated,isAdmin, addComplex);
router.get("/getComplexDetails/:complexId",isAuthenticated,getComplexDetails);
router.get("/showall",isAuthenticated,showAllComplex);
router.post("/add",isAuthenticated,isUser,bookComplex)
router.post("/availability",isAuthenticated,seeAvailability)


export default router;
