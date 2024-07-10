import { Request,Response } from "express";
import { Sport } from "../Models/sports";
import { SportComplex} from "../Models/sportComplexs";
import { Booking } from "../Models/booking";
import { GroundMaintenanceLog } from "../Models/groundMaintanance";

const maintananceLog = async(req:Request,res:Response)=>{
    try {
      const {sportComplexId} = req.body;
      const maintananceLogs = await GroundMaintenanceLog.find({sportComplex:sportComplexId});
      return maintananceLogs;
    } catch (error) {
      console.error('Error fetching maintanance logs:', error);
      throw error;
    }
  }

const scheduleMaintanance = async(req:Request,res:Response)=>{
    try {
      const {sportComplexId, performedBy, description, date, startTime, endTime} = req.body;
      const maintananceLog = new GroundMaintenanceLog({
        sportComplex: sportComplexId,
        performedBy,
        description,
        date,
        startTime,
        endTime,
      });
      await maintananceLog.save();
      console.log('Maintanance log created successfully:', maintananceLog);
      return maintananceLog;
    } catch (error) {
      console.error('Error creating maintanance log:', error);
      throw error;
    }
}

export {maintananceLog,scheduleMaintanance};