import asyncHandler from "express-async-handler";
import Student from "../model/studentModel.js";


export const studentAddController = asyncHandler(async (req, res) => {
  const { fname,lname, email, course, phone } = req.body;
  //   validation
  if (!fname) {
    return res.json({
      status: 400,
      success: false,
      error: "First Name is required.",
    });
  }
  if (!lname) {
    return res.json({
      status: 400,
      success: false,
      error: "Last Name is required.",
    });
  }
  if (!email) {
    return res.json({
      status: 400,
      success: false,
      error: "Email is Required.",
    });
  }
  if (!course) {
    return res.json({
      status: 400,
      success: false,
      error: "Course is Required.",
    });
  }
  if (!phone) {
    return res.json({
      status: 400,
      success: false,
      error: "Phone is Required.",
    });
  }


  try {
    const newUser = new Student({
      fname,
      lname,
      email,
      course,
      phone
    });
    // send user data
    const user = await newUser.save();
console.log(user);
    return res.json({
      status: 200,
      success: true,
      message: "Student Successfully Created.",
      user,
    });
  } catch (error) {
    return res.json({
      status: 401,
      success: false,
      error: "Student not creating.",
      error,
    });
  }
});
// update
export const studentUpdateController = async (req, res) => {
  try {
    const { name, email, course, phone } = req.body;
    const { id } = req.params;
    const category = await Userauthentication.findByIdAndUpdate(
      id,
      { name, email, course, phone },
      { new: true }
    );

    res.status(200).send({
      success: true,
      messsage: "Student Updated Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating Student",
    });
  }
};
// get
export const hjk = async (req, res) => {

  try {
    const user = await Userauthentication.find();
console.log(user);
    if (!user) {
      return res.status(404).json({ messsage: "Student Not FOund" });
    } else {
      return res.status(200).json({
        messsage: "Student Found",
        user: {
          id: user._id,
          email: user.email,
          fname: user.fname,
          lname: user.lname,
          course: user.course,
          phone: user.phone,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const studentGetController = async (req, res) => {
  try {
    const user = await Student.find();
    return res.status(201).send(user);
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
// delete
export const studentDeleteController = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Userauthentication.findByIdAndDelete(id);

    res.status(200).send({
      success: true,
      messsage: "Student Deleted Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while Deleting Student",
    });
  }
};