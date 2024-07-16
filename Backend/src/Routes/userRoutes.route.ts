import { Router } from "express";
import {
  addUser,
  getDetails,
  loginUser,
  logOut,
  googleLogin,
  googleCallback,
} from "../Controllers/user.controller";
import {
  loginBodyType,
  SignUpBodyType,
  loginResponseBodyType,
  SignUpResponseBodyType,
  MeResponseBodyType,
} from "../Schemas/user.schema";
import { GenericResponseType } from "../Schemas/genericResponse.schema";
import { upload } from "../Middlewares/multer";

const router = Router();

router
  .route("/signup")
  .post<any, SignUpResponseBodyType | GenericResponseType, SignUpBodyType>(
    upload.fields([
      {
        name: "profilepic",
        maxCount: 1,
      },
    ]),
    addUser,
  );

router
  .route("/login")
  .post<any, loginResponseBodyType | GenericResponseType, loginBodyType>(
    loginUser,
  );

router
  .route("/me")
  .get<any, MeResponseBodyType | GenericResponseType>(getDetails);

router.route("/logout").delete<any, GenericResponseType>(logOut);

// Google OAuth Routes
router.route("/google").get(googleLogin);
router.route("/google/callback").get(googleCallback);

export default router;
