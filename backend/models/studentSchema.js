import mongoose, { Schema } from "mongoose";

const studenSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  studentID: {
    type: Number,
    required: true,
  },
  EmailID: {
    type: String,
    required: true,
  },
  Contact: {
    type: Number,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Student", studenSchema);
