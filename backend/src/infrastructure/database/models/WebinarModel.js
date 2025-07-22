import mongoose, { model } from "mongoose";

const schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    timeNDate: { type: String, required: true },
    link: { type: String, required: true },
    img: { type: String, required: true },
    attendees: [
      {
        name: String,
        email: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const WebinarModel = mongoose.model("Webinars", schema);

export default WebinarModel;
