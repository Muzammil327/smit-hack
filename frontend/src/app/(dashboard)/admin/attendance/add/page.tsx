"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const AddTask = () => {
  const [loadings, setLoadings] = useState(false);

  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    date: "",
    course: "",
    status: "",
  });

  const SubmitHandle = async (e: any) => {
    e.preventDefault();

    const URL = `http://localhost:8000/api/student/add`;
    try {
      const res = await axios.post(URL, {

      },
        { withCredentials: true }
      );

      if (res.data.error) {
        toast.error(res.data.error);
        console.log(res.data.error);
      } else {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.warning("Error during Task Update");
    }
  };
  return (
    <div className="p-4 sm:ml-64">
      <h2 className="text-black c my-4 text-2xl">Add User Attendence</h2>

      {loadings ? (
        <p>Loading</p>
      ) : (
        <form onSubmit={SubmitHandle}>
          <div className="grid md:grid-cols-2 md:gap-6 mt-20">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="fname"
                className="input peer"
                placeholder=""
                required
                value={data.fname}
                onChange={(e) => setData({ ...data, fname: e.target.value })}

              />
              <label htmlFor="fname" className="label">First Name</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input type="text"
                name="lname"
                className="input peer"
                placeholder=" "
                required
                value={data.lname}
                onChange={(e) => setData({ ...data, lname: e.target.value })}
              />
              <label htmlFor="lname" className="label">Last Name</label>

            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6 mt-10">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="email"
                className="input peer"
                placeholder=""
                required
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}

              />
              <label htmlFor="email" className="label">Email</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input type="date"
                name="date"
                className="input peer"
                placeholder=" "
                required
                value={data.date}
                onChange={(e) => setData({ ...data, date: e.target.value })}
              />
              <label htmlFor="date" className="label">Joining Date</label>

            </div>
          </div>


          <div className="grid md:grid-cols-2 md:gap-6 mt-10">

            <div className="relative z-0 w-full mb-6 group">

              <label htmlFor="course" className="sr-only">Underline select</label>
              <select className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                <option selected>Choose a course</option>
                <option value="US">Frontend Web</option>
                <option value="CA">Backend Web</option>
                <option value="FR">Deveops Web</option>
                <option value="DE">Graphic Designer</option>
              </select>


            </div>
            <div className="relative z-0 w-full mb-6 group">

              <label htmlFor="status" className="sr-only">Status</label>
              <select className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                <option selected>Choose a status</option>
                <option value="US">Absent</option>
                <option value="CA">Present</option>
              </select>


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