"use client";

import axios from 'axios';
import { useState, useEffect } from 'react';
import { MdDelete } from "react-icons/md";


export default function MyProjects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProjects = async () => {
    const response = await axios.get('http://localhost:3334/api/projects');
    setProjects(response.data);
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      getProjects();
      setIsLoading(false);
    }, 1000);
  }, [])

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3334/api/projects/${id}`);
    setProjects(prevProjects => prevProjects.filter(project => project._id !== id));
  }

  const handleUpdate = (id, event) => {
    console.log(id)
    console.log(event)

    const updatedProject = {
      _id: id,
      title: event.target.elements.title.value,
      description: event.target.elements.description.value,
    };
    console.log(updatedProject.title)

    // await axios.put(`http://localhost:3334/api/projects/${id}`, updatedProject);
    
    setProjects(prevProjects => prevProjects.map(project => project._id === id ? updatedProject : project));
  }

  return (
    <main className='flex'>
      <div>
        <form className='w-[400px] border-2 border-[#ef4444] mx-20 p-5 rounded-md flex flex-col items-center gap-5'>
          <h1 className='text-2xl text-white'>Cadastre um projeto</h1>
          <input
            name='title'
            type='text'
            placeholder='Títudo do projeto'
            className='py-1 px-5 rounded-3xl'
          />
          <input
            name='description'
            type='text'
            placeholder='Descrição'
            className='py-1 px-5 rounded-3xl'
          />
          <button className='bg-[#ef4444] w-full py-2 mt-4 rounded-md'>Enviar</button>
        </form>
      </div>
      <div className='text-white flex justify-center w-full mr-20'>
        {isLoading ? (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-zinc-700 bg-opacity-70 backdrop-filter backdrop-blur-sm z-50 text-3xl">
            Buscando projetos...
          </div>
        ) : (
          <div>
            {(projects.length > 0) ? (
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
                      <button 
                        className='bg-[#ef4444] text-white w-full py-2 mt-4 rounded-md'
                        onClick={() => handleUpdate(item._id)}
                      >
                        Editar Projeto
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <h1>Não há projetos cadastrados!</h1>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}