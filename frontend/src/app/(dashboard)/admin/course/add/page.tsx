"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const AddTask = () => {
  const [loadings, setLoadings] = useState(false);

  const [data, setData] = useState({
    name: "",
    description: "",
    length: "",
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
      <h2 className="text-black c my-4 text-2xl">Add Course Data</h2>
      {loadings ? (
        <p>Loading</p>
      ) : (
        <form onSubmit={SubmitHandle}>
          <div className="grid md:grid-cols-2 md:gap-6 mt-20">
            <div className="relative z-0 w-full mb-6 group">
              <input type="text"
                name="name"
                className="input peer"
                placeholder=" "
                required
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}

              />
              <label htmlFor="name" className="label">Course Name</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="length"
                className="input peer"
                placeholder=" "
                required
                value={data.length}
                onChange={(e) => setData({ ...data, length: e.target.value })}
              />
              <label htmlFor="length" className="label">Course Length</label>
            </div>
          </div>
          <div className="relative z-0 w-full my-5 group">
            <textarea
              name="description"
              className="input peer"
              placeholder=" "
              required
              onChange={(e) => setData({ ...data, description: e.target.value })}
              value={data.description}

            />
            <label htmlFor="description" className="label">Course Description</label>
          </div>



          <button id="button" type="submit" name="submit"

            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Submit</button>

        </form>
      )}

    </div>
  );
};

export default AddTask;