"use client";

import axios from 'axios';
import { useState } from 'react';
import {FaUser, FaLock, FaAt} from "react-icons/fa";
import {FiLoader} from "react-icons/fi"

const URL = 'https://trilhafullstack.onrender.com';
//const URL = 'http://localhost:3334';

export default function CreateAccount() {
  const [user, setUser] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [buttonIsLoading, setButtonIsLoading] = useState('');

  const createUser = async (event) => {
    event.preventDefault();
    setButtonIsLoading(true);

    const {firstName, lastName, email, password} = user;

    try {
      const response = await axios.post(`${URL}/user`, { firstName, lastName, email, password });
      setUser({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      })

      setErrorMessage("Conta criada com sucesso!")

      setTimeout(() => {
        setErrorMessage('')
      }, 5000);

    } catch (error) {
      setErrorMessage(error.response.data.message)

      setTimeout(() => {
        setErrorMessage('')
      }, 5000);

    } finally {
      setButtonIsLoading(false);
    }
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
              className='py-2 px-5 rounded-xl'
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
              />
              <FaUser className="absolute right-1 top-3 w-3"/>
          </div>
          <div className="pb-5 flex relative">
            <input
              name='lastName'
              type='text'
              placeholder='Último Nome'
              className='py-2 px-5 rounded-xl'
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
              <FaUser className="absolute right-1 top-3 w-3"/>
          </div>
          <div className="pb-5 flex relative">
            <input
              name='email'
              type='email'
              placeholder='E-mail'
              className='py-2 px-5 rounded-xl'
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <FaAt className="absolute right-1 top-3 w-3"/>
          </div>
          <div className="pb-2 flex relative">
            <input
              name='password'
              type="password" 
              placeholder="Senha"
              className="py-2 px-5 rounded-xl"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <FaLock className="absolute right-1 top-3 w-3"/>
          </div>
          <div className="mt-8 flex flex-col items-center relative">
            <div className="border-b border-red-500 mb-8 w-2/3"></div>
            <button 
              className="bg-[#ef4444] text-white text-2xl w-full h-10 rounded-md"
              onClick={createUser}
            >
              {
                buttonIsLoading && (
                <p><FiLoader className="text-white animate-spin ml-[90px] top-10 absolute" /></p>
                )
              }
              <span>Criar</span>
            </button>
          </div>
        </form>
        {errorMessage && <div className='text-[#ef4444] text-sm mb-4'>{errorMessage}</div>}
      </div>
    </main>
  );
}