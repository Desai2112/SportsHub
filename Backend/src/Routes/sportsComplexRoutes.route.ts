import { Router } from "express";
import { addComplex,getComplexDetails,showAllComplex } from "../Controllers/sportcomplexs.controller";
import isAdmin from "../Middlewares/isAdmin";

const router = Router();
router.post("/addComplex",isAdmin, addComplex);
router.get("/getComplexDetails/:complexId",isAdmin,getComplexDetails);
router.get("/showall",isAdmin,showAllComplex);

export default router;
