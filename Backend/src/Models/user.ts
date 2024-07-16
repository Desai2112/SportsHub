import mongoose, { Document, ObjectId, Schema } from "mongoose";
import bcrypt from "bcrypt";

export enum userRole {
  user = "User",
  manager = "Manager",
}

export type IUser = {
  googleId?: string;
  name: string;
  email: string;
  password: string;
  role: userRole;
  deleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  mobileNo: string;
  profilePic: string;
};

export type IUserModel = IUser &
  Document & {
    _id: Schema.Types.ObjectId;
    comparePassword(password: string): Promise<boolean>;
  };

export const userSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: userRole,
      default: userRole.user,
      required: true,
    },
    deleted: {
      type: Boolean,
      default: false,
      required: true,
    },
    mobileNo: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      required: true,
    },
    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

userSchema.pre<IUserModel>("save", async function (next) {
  const user = this as IUserModel;
  if (!user.isModified("password")) return next();

  user.password = await bcrypt.hash(user.password, 10);
  next();
});

userSchema.methods.comparePassword = async function (password: string) {
  const user = this as IUserModel;
  return bcrypt.compare(password, user.password);
};

export const User = mongoose.model<IUserModel>("User", userSchema);
