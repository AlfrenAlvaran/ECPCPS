import mongoose from "mongoose";
import { env } from "../config/env.js";

export default async function connection() {
  await mongoose.connect(env.database);
}
