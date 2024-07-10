import { Router } from "express";
import isManager from "../Middlewares/isManager";
import isAuthenticated from "../Middlewares/isAuthenticated";
import { approveBooking, rejectBooking, showAllBookingReqests } from "../Controllers/booking.controller";
import { maintananceLog, scheduleMaintanance } from "../Controllers/maintanance.controller";

const router = Router();

router.get("/pendingreq",isAuthenticated,isManager,showAllBookingReqests)
router.get("/showmaintanance",isAuthenticated,isManager,maintananceLog)
router.post("/addmaintanance",isAuthenticated,isManager,scheduleMaintanance)
router.get('/approvereq/:bookingId',isAuthenticated,isManager,approveBooking)
router.get('/rejectreq/:bookingId',isAuthenticated,isManager,rejectBooking)

export default router;
