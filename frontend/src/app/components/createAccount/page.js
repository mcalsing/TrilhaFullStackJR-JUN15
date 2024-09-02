"use client";

import axios from 'axios';
import { useState } from 'react';
import {FaUser, FaLock, FaAt} from "react-icons/fa";

export default function CreateAccount() {
  const [user, setUser] = useState('');
  const [errorMessage, setErrorMessage] = useState('')

  const createUser = async (event) => {
    event.preventDefault();
    const {firstName, lastName, email, password} = user;

    const response = await axios.post('http://localhost:3334/user', { firstName, lastName, email, password });
    console.log(response.data);
    setUser({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    })
    setErrorMessage('Usuário criado com sucesso!')
    setTimeout(() => {
      setErrorMessage('')
    }, 5000);
  }

  return (
    <main className="w-full flex justify-center">
      <div className="text-lg flex flex-col items-center justify-center border-2 border-red-500 w-1/2 rounded-lg">
        <h1 className="text-white text-4xl mt-5">Criar conta</h1>
        <form className="px-8 py-6 rounded-md">
          <div className="pb-5 flex relative">
            <input
              name='firstName'
              type='text'
              placeholder='Primeiro Nome'
              className='py-2 px-8 rounded-3xl'
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
              />
              <FaUser className="absolute right-2 top-3"/>
          </div>
          <div className="pb-5 flex relative">
            <input
              name='lastName'
              type='text'
              placeholder='Último Nome'
              className='py-2 px-8 rounded-3xl'
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
              <FaUser className="absolute right-2 top-3"/>
          </div>
          <div className="pb-5 flex relative">
            <input
              name='email'
              type='email'
              placeholder='E-mail'
              className='py-2 px-8 rounded-3xl'
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <FaAt className="absolute right-2 top-3"/>
          </div>
          <div className="pb-2 flex relative">
            <input
              name='password'
              type="password" 
              placeholder="Senha"
              className="py-2 px-8 rounded-3xl"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <FaLock className="absolute right-2 top-3"/>
          </div>
          <div className="mt-11 flex flex-col items-center">
            <div className="border-b border-red-500 mb-11 w-2/3"></div>
            <button 
              className="bg-[#ef4444] text-black text-2xl w-full h-10 rounded-md"
              onClick={createUser}
            >
              Criar
            </button>
            {errorMessage && <div className='text-[#ef4444] text-md pt-3'>{errorMessage}</div>}
          </div>
        </form>
      </div>
    </main>
  );
}