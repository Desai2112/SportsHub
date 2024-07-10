import mongoose, { Document, Schema } from "mongoose";

export type ISport = {
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

export type ISportModel = ISport &
  Document & {
    _id: Schema.Types.ObjectId;
  };

export const sportSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export const Sport = mongoose.model<ISportModel>("Sport", sportSchema);
