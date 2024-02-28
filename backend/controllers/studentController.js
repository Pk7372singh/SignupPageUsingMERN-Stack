import studentSchema from "../models/studentSchema.js";

export const createStudent = async (req, res) => {
  const newStudent = new studentSchema(req.body);
  try {
    const savedStudent = await newStudent.save();
    res.status(200).json({
      message: "student created successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "student went wrong",
      error: error,
    });
  }
};
