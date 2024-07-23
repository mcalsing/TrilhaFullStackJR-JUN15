"use client";

import axios from 'axios';
import { useState, useEffect } from 'react';
import { MdDelete } from "react-icons/md";

export default function MyProjects() {
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const response = await axios.get('http://localhost:3334/api/projects');
    setProjects(response.data);
  };

  useEffect(() => {
    getProjects();
  }, [])

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3334/api/projects/${id}`);
    setProjects(prevProjects => prevProjects.filter(project => project._id !== id));
  }

  return (
    <main className='text-black flex flex-wrap justify-center gap-10'>
      {projects.map(item => (
        <div key={item._id} className='bg-white p-6 rounded-md w-[400px] text-justify'>
          <div className='flex relative'>
            <h2 className='font-bold mb-2'>Título: {item.title}</h2>
            <MdDelete 
              className='absolute right-0 cursor-pointer text-xl text-slate-400 hover:text-[#ef4444]'
              onClick={() => handleDelete(item._id)}
            />
          </div>
          <p>Descrição: {item.description}</p>
        </div>
      ))}
    </main>
  );
}