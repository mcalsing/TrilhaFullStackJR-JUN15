"use client";

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { MdDelete } from "react-icons/md";
import { useRouter } from 'next/navigation';

const URL = 'https://trilhafullstack.onrender.com'
// const URL2 = 'http://localhost:3334'

export default function MyProjects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentProject, setCurrentProject] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [createdByUserId, setCreatedByUserId] = useState(null);

  const router = useRouter();

  useEffect(() => {
    setIsLoading(true);

    const dataFromLocalStorageString = localStorage.getItem('tokenFullStack');
    
    if (dataFromLocalStorageString == null) {
      console.error("Usuário não está logado")
      router.push("/");
    }
    
    setTimeout(() => {
      const dataFromLocalStorageJSON = JSON.parse(dataFromLocalStorageString);
      setCreatedByUserId(dataFromLocalStorageJSON.id);
    }, 500);
    
  }, []);

  useEffect(() => {
    if (createdByUserId) {
      // Só busca projetos quando o ID do usuário estiver disponível no state
      getProjects(createdByUserId);
      
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, [createdByUserId]);

  const getProjects = async (userId) => {
    const response = await axios.get(`${URL}/api/projects`);
    const userProjects = response.data.filter(project => project.createdByUserId === userId )
    setProjects(userProjects)
  };

  const handleDelete = async (id) => {
    await axios.delete(`${URL}/api/projects/${id}`);
    setProjects(projects.filter(project => project._id !== id));
  }

  const handleUpdate = async (id, title, description) => {
    setIsEditing(true);

    setCurrentProject({
      id: id,
      title: title,
      description: description
    });
  }

  const sendUpdate = async (event) => {
    event.preventDefault();
    const { id, title, description } = currentProject;
    
    try {
      const response = await axios.put(`${URL}/api/projects/${id}`, { createdByUserId, title, description });
      const copyOfProjects = [...projects]
      const index = copyOfProjects.findIndex(project => project._id === id);
  
      copyOfProjects[index] = response.data;
  
      setProjects(copyOfProjects);
      setCurrentProject({
        title: '',
        description: ''
      });
      setIsEditing(false);

    } catch (error) {
      setErrorMessage(error.response.data.message);
      setTimeout(() => {
        setErrorMessage('')
      }, 5000);
    }
  };

  const cancelUpdate = (event) => {
    event.preventDefault();
    setIsEditing(false);
    setCurrentProject({
      title: '',
      description: ''
    });
  };

  const createProject = async (event) => {
    event.preventDefault();
    const { title, description } = currentProject;

    try {
      const response = await axios.post(`${URL}/api/projects`, { createdByUserId, title, description });
      setProjects([...projects, response.data]);
      setCurrentProject({
        title: '',
        description: ''
      });
      
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setTimeout(() => {
        setErrorMessage('')
      }, 5000);
    }
  };

  return (
    <div className='flex w-full justify-center h-screen gap-10 m-auto'>
      <div className='w-3/12 px-4'>
      <div className="p-5 border-[1px] border-[#ef4444] rounded-md">
        <form className='w-full flex flex-col justify-between gap-4'>
          {isEditing ? (
            <h1 className='text-2xl text-white'>Editar Projeto</h1>
          ) : (
            <h1 className='text-2xl text-white'>Cadastrar Projeto</h1>
          )}
          <input
            name='title'
            type='text'
            placeholder='Título do projeto'
            className='py-2 px-5 rounded-md bg-zinc-950 border-[1px] border-zinc-400/50'
            value={currentProject.title}
            onChange={(e) => setCurrentProject({ ...currentProject, title: e.target.value })}
          />
          <textarea
            name='description'
            type='text'
            cols='23'
            rows='8'
            placeholder='Descrição'
            className='p-4 h-[300px] rounded-md bg-zinc-950 border-[1px] resize-none overflow-y-auto border-zinc-400/50'
            value={currentProject.description}
            onChange={(e) => setCurrentProject({ ...currentProject, description: e.target.value })}
          />
          {isEditing ? (
            <div className='grid grid-flow-col justify-stretch gap-5 w-full h-10 mt-4'>
              <button className='bg-[#ef4444] rounded-md px-16' onClick={sendUpdate}>Editar</button>
              <button className='bg-[#ef4444] rounded-md' onClick={cancelUpdate}>Cancelar</button>
            </div>
          ) : (
            <button className='bg-[#ef4444] w-full py-2 mt-4 rounded-md text-white' onClick={createProject}>Cadastrar</button>
          )}
          {errorMessage && <div className='text-[#ef4444] text-sm'>{errorMessage}</div>}
        </form>
        </div>
      </div>
      <div className='text-white flex justify-center w-10/12 mr-20'>
        {isLoading ? (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-zinc-700 bg-opacity-70 backdrop-filter backdrop-blur-sm z-50 text-3xl">
            Buscando projetos...
          </div>
        ) : (
          <div>
            {(projects.length > 0) ? (
              <div className='text-black flex flex-wrap gap-10 items-start'>
                {projects.map(item => (
                  <div key={item._id} className='flex flex-col bg-white p-6 rounded-md w-[400px] text-justify'>
                    <div className='flex relative'>
                      <h2 className='font-bold mb-2'>Título: {item.title}</h2>
                      <MdDelete 
                        className='absolute right-0 cursor-pointer text-xl text-slate-400 hover:text-[#ef4444]'
                        onClick={() => handleDelete(item._id)}
                      />
                    </div>
                    <p className='break-words'><strong>Descrição:</strong> {item.description}</p>
                    <div className='mt-auto'>
                      <button 
                        className='bg-[#ef4444] text-black w-full py-2 mt-4 rounded-md'
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
    </div>
  );
}