import { User } from "../Models/user";
import { Request, Response, NextFunction } from "express";
import validator from "validator";
import {
  loginBodyType,
  loginResponseBodyType,
  MeResponseBodyType,
  SignUpBodyType,
  SignUpResponseBodyType,
} from "../Schemas/user.schema";
import { GenericResponseType } from "../Schemas/genericResponse.schema";

const addUser = async (
  req: Request<
    any,
    SignUpResponseBodyType | GenericResponseType,
    SignUpBodyType
  >,
  res: Response<SignUpResponseBodyType | GenericResponseType>,
) => {
  try {
    const { name, email, password, mobileNo } = req.body;

    if (!name || !email || !password || !mobileNo) {
      return res.status(400).json({
        message: "All the fields are required.",
        success: false,
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        message: "Email is not valid.",
        success: false,
      });
    }

    if (!validator.isMobilePhone(mobileNo,['en-IN'])) {
      return res.status(400).json({
        message: "Mobile number is not valid.",
        success: false,
      });
    }

    if (!validator.isLength(password, { min: 10 })) {
      return res.status(400).json({
        message: "Password must be at least 10 characters long.",
        success: false,
      });
    }

    const existingUserEmail = await User.findOne({ email });
    if (existingUserEmail) {
      return res.status(400).json({
        message: "Email already exists.",
        success: false,
      });
    }

    const newUser = new User({
      name: name,
      email: email,
      password: password,
      mobileNo:mobileNo,
    });

    await newUser.save();

    res.status(201).json({
      message: "User created successfully.",
      userDetails: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        mobileNo: newUser.mobileNo,
        createdAt: newUser.createdAt,
        updatedAt: newUser.updatedAt,
      },
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  }
};

const loginUser = async (
  req: Request<any, loginResponseBodyType | GenericResponseType, loginBodyType>,
  res: Response<loginResponseBodyType | GenericResponseType>,
  next: NextFunction,
) => {
  try {
    // const body = req.body;
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    req.session.user = user._id;

    res.status(200).json({
      message: "Login successful.",
      userDetails: {
        id: user._id,
        name: user.name,
        email: user.email,
        mobileNo:user.mobileNo,
        role:user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

const getDetails = async (
  req: Request<any, MeResponseBodyType | GenericResponseType>,
  res: Response<MeResponseBodyType | GenericResponseType>,
) => {
  try {
    const user = await User.findById(req.session.user);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }
    res.status(200).json({
      message: "User found",
      user,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

const logOut = async (
  req: Request<any, GenericResponseType>,
  res: Response<GenericResponseType>,
) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Failed to log out", success: false });
      } else {
        res
          .status(200)
          .json({ message: "Logged out successfully", success: true });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};

const addAdmin=async(req:Request,res:Response)=>{
  try {
    const { name, email, password, mobileNo } = req.body;

    if (!name || !email || !password || !mobileNo) {
      return res.status(400).json({
        message: "All the fields are required.",
        success: false,
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        message: "Email is not valid.",
        success: false,
      });
    }

    if (!validator.isLength(password, { min: 10 })) {
      return res.status(400).json({
        message: "Password must be at least 10 characters long.",
        success: false,
      });
    }

    const existingUserEmail = await User.findOne({ email });
    if (existingUserEmail) {
      return res.status(400).json({
        message: "Email already exists.",
        success: false,
      });
    }

    const newUser = new User({
      name: name,
      email: email,
      password: password,
      role: "admin",
      mobileNo:mobileNo,
    });

    await newUser.save();

    res.status(201).json({
      message: "User created successfully.",
      userDetails: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        mobileNo: newUser.mobileNo,
        createdAt: newUser.createdAt,
        updatedAt: newUser.updatedAt,
      },
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  }
}

export { addUser, loginUser, getDetails, logOut,addAdmin };
