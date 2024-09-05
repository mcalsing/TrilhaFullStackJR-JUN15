"use client";

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { MdDelete } from "react-icons/md";

export default function MyProjects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentProject, setCurrentProject] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [createdByUserId, setCreatedByUserId] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    const dataFromLocalStorageString = localStorage.getItem('tokenFullStack');
    const dataFromLocalStorageJSON = JSON.parse(dataFromLocalStorageString);
    setCreatedByUserId(dataFromLocalStorageJSON.id);
    
  }, []);

  useEffect(() => {
    if (createdByUserId) {
      // Só busca projetos quando o ID do usuário estiver disponível no state
      getProjects(createdByUserId);
      setIsLoading(false);
    }
  }, [createdByUserId]);

  const getProjects = async (userId) => {
    const response = await axios.get('http://localhost:3334/api/projects');
    const userProjects = response.data.filter(project => project.createdByUserId === userId )
    setProjects(userProjects)
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3334/api/projects/${id}`);
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
      const response = await axios.put(`http://localhost:3334/api/projects/${id}`, { title, description });
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
    console.log('entrei no cancelar')
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
      const response = await axios.post('http://localhost:3334/api/projects', { createdByUserId, title, description });
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
    <main className='flex'>
      <div>
        <form className='w-[400px] border-2 border-[#ef4444] mx-20 p-5 rounded-md flex flex-col items-center gap-5'>
          {isEditing ? (
            <h1 className='text-2xl text-white'>Editar Projeto</h1>
          ) : (
            <h1 className='text-2xl text-white'>Cadastrar Projeto</h1>
          )}
          <input
            name='title'
            type='text'
            placeholder='Títudo do projeto'
            className='py-1 px-5 rounded-3xl'
            value={currentProject.title}
            onChange={(e) => setCurrentProject({ ...currentProject, title: e.target.value })}
          />
          <textarea
            name='description'
            type='text'
            cols='23'
            rows='8'
            placeholder='Descrição'
            className='py-1 px-5 rounded-3xl'
            value={currentProject.description}
            onChange={(e) => setCurrentProject({ ...currentProject, description: e.target.value })}
          />
          {isEditing ? (
            <div className='grid grid-flow-col justify-stretch gap-5 w-full h-10 mt-4'>
              <button className='bg-[#ef4444] rounded-md px-16' onClick={sendUpdate}>Editar</button>
              <button className='bg-[#ef4444] rounded-md' onClick={cancelUpdate}>Cancelar</button>
            </div>
          ) : (
            <button className='bg-[#ef4444] w-full py-2 mt-4 rounded-md' onClick={createProject}>Cadastrar</button>
          )}
          {errorMessage && <div className='text-[#ef4444] text-sm'>{errorMessage}</div>}
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
    </main>
  );
}