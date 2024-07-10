import mongoose, { Document, Schema } from "mongoose";


export enum bookingStatus{
  booked="booked",
  completed="completed",
  cancelled="cancelled"
}

export enum approvalStatus{
  pending="pending",
  approved="approved",
  rejected="rejected"
}
export type IBooking = {
  user: Schema.Types.ObjectId;
  sportComplex: Schema.Types.ObjectId;
  sport: Schema.Types.ObjectId;
  startTime: Date;
  endTime: Date;
  status: bookingStatus; 
  approvalStatus: approvalStatus;
  createdAt: Date;
  updatedAt: Date;
};

export type IBookingModel = IBooking &
  Document & {
    _id: Schema.Types.ObjectId;
  };

export const bookingSchema: Schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    sportComplex: {
      type: Schema.Types.ObjectId,
      ref: "SportComplex",
      required: true,
    },
    sport: {
      type: Schema.Types.ObjectId,
      ref: "Sport",
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
    status: {
      type: String,
      enum:bookingStatus,
      default: bookingStatus.booked,
      required: true,
    },
    approvalStatus: {
      type: String,
      enum: approvalStatus,
      default: approvalStatus.pending,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export const Booking = mongoose.model<IBookingModel>("Booking", bookingSchema);
