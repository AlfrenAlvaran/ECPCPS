import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("User", schema);

export default UserModel;
