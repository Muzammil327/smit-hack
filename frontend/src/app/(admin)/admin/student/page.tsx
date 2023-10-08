'use client'
import axios from 'axios';
import React from 'react'
import Link from 'next/link';
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Student() {
    const [user, setUser] = useState([]);

    const headers = {
        "Content-Type": "application/json",
    };
    const URL = `http://localhost:8000/api/student/get`;

    useEffect(() => {
        const getAllData = async () => {
            const res = await axios.get(URL, { headers });
            console.log(res.data);
            setUser(res.data);
        };

        getAllData();
    }, [URL, headers, user]);
    console.log(user)



    const handelDelete = async (id: any) => {
        try {
            const res = await axios.delete(
                `${process.env.NEXT_PUBLIC_NODEJSUSER_URL}api/crud/delete/${id}`
            );
            toast.success(res.data.message);
        } catch (error) {
            toast.warning("Error during Delete");
        }
    };


    return (
        <div className="p-4 sm:ml-64 bg-red-400 h-[400px]">
            <h1 className='c text-4xl text-white my-10'>Total Student</h1>
            <div className=" overflow-x-auto shadow-md sm:rounded-lg mt-5">

                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <div className='b my-2'>
                        <h1 className='text-white '>Student</h1>
                        <Link href="/admin/student/add" className="font-medium bg-blue-600 py-2 px-3 text-white dark:text-blue-500 hover:underline rounded">Add New</Link>
                    </div>
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Student Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                First Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Last Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Course
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((data: any) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">


                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {data.id}
                                </th>
                                <td className="px-6 py-4">
                                    {data.fname}
                                </td>
                                <td className="px-6 py-4">
                                    {data.lname}
                                </td>
                                <td className="px-6 py-4">
                                    {data.email}
                                </td>
                                <td className="px-6 py-4">
                                    {data.phone}
                                </td>
                                <td className="px-6 py-4">
                                    {data.course}
                                </td>
                                <td className="px-6 py-4 flex gap-4">
                                    <Link
                                        href={`/admin/student/edit/${data.id}`}
                                        className="font-medium bg-blue-600 py-2 px-3 text-white dark:text-blue-500 hover:underline rounded">Edit</Link>
                                    <button onClick={() => handelDelete(data.id)} className="font-medium bg-red-500 py-2 px-3 text-white dark:text-blue-500 hover:underline rounded">Delete</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>'




        </div>


    )
}


const data = [
    {
        id: 1,
        fname: "Imran",
        lname: "Imran",
        email:"user@gmail.com",
        phone: "03144878266",
        course:"web"
    },
    {
        id: 2, 
        fname: "Imran",
        lname: "Imran",
        email:"user@gmail.com",
        phone: "03144878266",
        course:"web"
    },
    {
        id: 3,
        fname: "Imran",
        lname: "Imran",
        email:"user@gmail.com",
        phone: "03144878266",
        course:"web"
    },
    {
        id: 4,
        fname: "Imran",
        lname: "Imran",
        email:"user@gmail.com",
        phone: "03144878266",
        course:"web"
    }
]