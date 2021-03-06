import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fullname: { type: String, required:  true },
  organization: { type: String, required:  true },
  college: { type: String, required:  true },
  email: { type: String, required: true },
  studentnumber: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});

export default mongoose.model("User", userSchema);