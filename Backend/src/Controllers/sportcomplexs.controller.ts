import express, { Request, Response } from "express";
import { SportComplex } from "../Models/sportComplexs";
import { User } from "../Models/user";
import { Sport } from "../Models/sports";

const router = express.Router();

const addComplex=async (req: Request, res: Response) => {
  const { name, address, phone, email, description, manageremail,sportsNames } = req.body;
  console.log(manageremail)
  try {

    if (!name || !address || !phone || !email || !description || !manageremail || !sportsNames) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const manager=await User.findOne({email:manageremail}).select("_id");
    if(!manager){
      return res.status(404).json({ message: "Manager not found" });
    }
    const sportIds = await Promise.all(sportsNames.map(async (name: string) => {
      const sport = await Sport.findOne({ name });
      return sport?._id;
    }));

    const newSportComplex = new SportComplex({
      name: name,
      address: address,
      phone: phone,
      email: email,
      description: description,
      manager: manager._id,
      sports: sportIds,
      deleted: false,
    });

    await newSportComplex.save();

    res.status(201).json({ message: "Sport Complex created successfully", newSportComplex,success:true });
  } catch (error) {
    console.error("Error creating sport complex:", error);
    res.status(500).json({ message: "Internal server error",success:false });
  }
}

const getComplexDetails=async(req:Request,res:Response)=>{
    const {complexId}=req.params;
    try {
        const complexDetails=await SportComplex.findById(complexId).
        populate("manager","name email phone").
        populate("sports","name");
        if(complexDetails){
            res.status(200).json({complexDetails,success:true});
            }else{
                res.status(404).json({message:"Complex not found",success:false});
            }
    } catch (error) {
        console.error("Error getting complex details:", error);
        res.status(500).json({ message: "Internal server error",success:false });
    }
}

const showAllComplex=async(req:Request,res:Response)=>{
    try {
        const allComplex=await SportComplex.find({deleted:false}).populate("manager","name email phone").populate("sports","name -_id");
        res.status(200).json({allComplex,success:true});
    } catch (error) {
        console.error("Error getting all complex:", error);
        res.status(500).json({ message: "Internal server error",success:false });
    }
}

export {addComplex,getComplexDetails,showAllComplex};