import mongoose, { Document, Schema } from "mongoose";

export type IGroundMaintenanceLog = {
  sportComplex: Schema.Types.ObjectId;
  performedBy: Schema.Types.ObjectId;
  description: string;
  date: Date;
  startTime: Date;
  endTime: Date;
  createdAt: Date;
  updatedAt: Date;
};

export type IGroundMaintenanceLogModel = IGroundMaintenanceLog &
  Document & {
    _id: Schema.Types.ObjectId;
  };

export const groundMaintenanceLogSchema: Schema = new Schema(
  {
    sportComplex: {
      type: Schema.Types.ObjectId,
      ref: "SportComplex",
      required: true,
    },
    performedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export const GroundMaintenanceLog = mongoose.model<IGroundMaintenanceLogModel>(
  "GroundMaintenanceLog",
  groundMaintenanceLogSchema,
);
