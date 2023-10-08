"use client";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const AddTask = () => {
  const [loadings, setLoadings] = useState(false);
const port = 8000
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    course: "",
  });
console.log("before")
  const SubmitHandle = async (e: any) => {
    e.preventDefault();
    console.log("after")

alert("ASdf");

    try {
      const res = await axios.post(
        `http://localhost:8000/api/student/add`, {
        fname: data.fname,
        lname: data.lname,
        email: data.email,
        course: data.course,
        phone: data.phone,
      }
      );
      console.log(res.data);
      // console.log("res:", res);
      // console.log("res data:", res.data);
      if (res.data) {
        console.log(res.data);
      } else {
        setData({
          fname: "",
          lname: "",
          email: "",
          course: "",
          phone: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-4 sm:ml-64">
      <h2 className="text-black c my-4 text-2xl">Add Student Data</h2>

      {loadings ? (
        <p>Loading</p>
      ) : (
        <form onSubmit={SubmitHandle} className="mt-20">
          <div className="relative z-0 w-full my-8 group">
            <input
              type="email"
              name="email"
              className="input peer"
              placeholder=" " required
              onChange={(e) => setData({ ...data, email: e.target.value })}
              value={data.email}

            />
            <label htmlFor="email" className="label">Email address</label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="fname"
                className="input peer"
                placeholder=" " required
                onChange={(e) => setData({ ...data, fname: e.target.value })}
                value={data.fname}

              />
              <label htmlFor="fname" className="label">First name</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="lname"
                className="input peer"
                placeholder=" " required
                onChange={(e) => setData({ ...data, lname: e.target.value })}
                value={data.lname}
              />
              <label htmlFor="floating_last_name" className="label">Last name</label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="tel"
                name="phone"
                className="input peer"
                placeholder=" " required
                onChange={(e) => setData({ ...data, phone: e.target.value })}
                value={data.phone}
              />
              <label htmlFor="floating_phone" className="label">Phone number (123-456-7890)</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="course"
                className="input peer"
                placeholder=" " required
                onChange={(e) => setData({ ...data, course: e.target.value })}
                value={data.course}
              />
              <label htmlFor="floating_company" className="label">Course (Ex. Web)</label>
            </div>
          </div>

          <button id="button" type="submit" name="submit"

            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Submit</button>

        </form>
      )}

    </div>
  );
};

export default AddTask;