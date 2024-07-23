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
    <main className='flex'>
      <div className=''>
        <form className='w-[400px] bg-red-500 mx-20 p-5 rounded-md flex flex-col items-center gap-5'>
          <h1 className='text-2xl'>Cadastre um projeto</h1>
          <input
            type='text'
            placeholder='Títudo do projeto'
            className='py-1 px-5 rounded-md'
          />
          <input
            type='text'
            placeholder='Descrição'
            className='py-1 px-5 rounded-md'
          />
          <button className='bg-white w-full py-2 mt-4 rounded-md'>Enviar</button>
        </form>
      </div>
      <div className='text-black flex flex-wrap justify-center gap-10'>
        {projects.map(item => (
          <div key={item._id} className='flex flex-col  bg-white p-6 rounded-md w-[400px] text-justify'>
            <div className='flex relative'>
              <h2 className='font-bold mb-2'>Título: {item.title}</h2>
              <MdDelete 
                className='absolute right-0 cursor-pointer text-xl text-slate-400 hover:text-[#ef4444]'
                onClick={() => handleDelete(item._id)}
              />
            </div>
            <p>Descrição: {item.description}</p>
            <div className=''>
              <button className='bg-red-500 text-white w-full py-2 mt-4 rounded-md'>Editar Projeto</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}