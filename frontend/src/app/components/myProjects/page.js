"use client";

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { MdDelete } from "react-icons/md";


export default function MyProjects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [projectUpdate, setProjectUpdate] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const getProjects = async () => {
    const response = await axios.get('http://localhost:3334/api/projects');
    setProjects(response.data)
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

  const handleUpdate = async (id, title, description) => {
    setIsEditing(true);

    //console.log(projectUpdate.id);
    //console.log(projectUpdate.title);
    //console.log(projectUpdate.description);

    setProjectUpdate({
      id: id,
      title: title,
      description: description
    });
    
    
    // await axios.put(`http://localhost:3334/api/projects/${id}`, { title, description });
    
    // setProjects(prevProjects => prevProjects.map(project => project.id === id ? projectUpdate : project));
  }

  const sendUpdate = async (event) => {
    event.preventDefault();
  
    // const { id, title, description } = projectUpdate;
  
   /*  console.log(id, title, description);
    try {
      const response = await axios.put(`http://localhost:3334/api/projects/${id}`, { title, description });
  
      if (response.status === 200) {
        // Atualizar o estado local `projects` com os novos dados (se necessário)
        console.log('Projeto atualizado com sucesso!');
      } else {
        console.error('Erro ao atualizar o projeto:', response.data);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    } finally {
      setIsEditing(false);
    } */
  };

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
            value={projectUpdate.title}
            onChange={(e) => setProjectUpdate(e.target.value)}
          />
          <textarea
            name='description'
            type='text'
            cols='23'
            rows='8'
            placeholder='Descrição'
            className='py-1 px-5 rounded-3xl'
            value={projectUpdate.description}
            onChange={(e) => setProjectUpdate(e.target.value)}
          />
          {isEditing ? (
            <button 
              className='bg-[#ef4444] w-full py-2 mt-4 rounded-md'
              onClick={() => sendUpdate()}
            >
              Editar
            </button>
          ) : (
            <button className='bg-[#ef4444] w-full py-2 mt-4 rounded-md'>Cadastrar</button>
          )}
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
                        onClick={() => handleUpdate(item._id, item.title, item.description)}
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