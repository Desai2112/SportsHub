import { Router } from "express";
import { addComplex,getComplexDetails,showAllComplex,findComplexbySports } from "../Controllers/sportcomplexs.controller";
import isManager from "../Middlewares/isManager";

const router = Router();
router.post("/addComplex",isManager, addComplex);
router.get("/getComplexDetails/:complexId",isManager,getComplexDetails);
router.get("/showall",isManager,showAllComplex);
router.get("/sport/:sportName",findComplexbySports);


export default router;
