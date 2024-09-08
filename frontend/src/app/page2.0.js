"use client"

import { useRouter } from 'next/navigation';
import Image from "next/image";
import {FaAt, FaLock} from "react-icons/fa"
import {FiLoader} from "react-icons/fi"
import { useState } from "react";
import axios from 'axios';
import Button from './components/components/Button';

const URL = 'https://trilhafullstack.onrender.com'
const URL2 = 'http://localhost:3334'

export default function Home() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [loginHandler, setLoginHandler] = useState({
    error: false,
    errorMessage: '',
    isLoading: false,
  });

  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoginHandler((prevState) => ({...prevState, isLoading: true}));

    try {
      if(!loginData.email || !loginData.password) {
        setLoginHandler((prevState) => ({...prevState, isLoading: false, errorMessage: 'Preencha todos os campos'}));
        return;
      }
      const response = await axios.post(`${URL2}/login`, { email: loginData.email, password: loginData.password });
      const dataToStorage = response.data;
  
      const dataToStorageJSON = JSON.stringify(dataToStorage);
      window.localStorage.setItem("tokenFullStack", dataToStorageJSON);
  
      if(response.status === 200) {
        router.push("/components/myProjects");            
      }
    } catch (error) {    
      console.log(error.response)
      setLoginHandler((prevState) => ({...prevState, isLoading: false, errorMessage: error.response.data.message }));          
    }

  };

  return (
    <div className="w-full justify-between flex h-screen">
      <div className="w-1/2 bg-red-500 h-full">
        <Image className="absolute top-15 ml-32" src="/menina_fundo.png" alt="log" width={300} height={24}></Image>
        <p className=" absolute w-1/2 top-[525px] border border-b-2"></p>
        <div className='absolute top-[530px]'>
          <span className="font-medium text-4xl">Código certo</span><br></br>
          <span className="font-medium text-xl">Construindo o amanhã, hoje</span>
        </div>
      </div>
      <div className="w-1/2 bg-zinc-100 h-full flex flex-col items-center justify-center">    
      <div className="w-full h-full flex flex-col px-36 gap-10 justify-center">  
        <span className="text-4xl font-medium">Bem-vindo de volta!</span>
        <form className="flex items-center flex-col gap-4 h-full rounded-md text-zinc-900" onSubmit={handleLogin}>
          <div className="flex flex-col w-full gap-4">
            <div className="pb-5 justify-between bg-white flex border-zinc-200 border-[1px] p-5 rounded-lg w-full">
              <input 
                type="email"
                placeholder="E-mail"             
                onChange={(e) => setLoginData((prevState) => ({...prevState, email: e.target.value}))}
                />
                <FaAt className="w-6"/>
            </div>
            <div className="pb-5 justify-between bg-white flex border-zinc-200 border-[1px] p-5 rounded-lg w-full">
              <input 
                type="password" 
                placeholder="Senha"              
                onChange={(e) => setLoginData((prevState) => ({...prevState, password: e.target.value}))}
              />
              <FaLock className="w-6"/>
            </div>
            </div>
            <div className="w-full justify-end">
              <a href="#">Esqueceu a senha?</a>
            </div> 
            <div className="flex items-center w-full">          
              <button className="bg-[#ef4444] w-full flex items-center justify-center text-white font-light text-2xl h-12 rounded-md">
                  {
                  loginHandler.isLoading ? <FiLoader className="text-white animate-spin"/>
                  : 'Entrar'
                  }                  
              </button>              
            </div>
            <div className="text-white mt-5 flex justify-center">
              <a className="text-base" href="/components/createAccount">Criar Conta</a>
            </div>
          </form>
      </div>
          {loginHandler.errorMessage && <div className='text-[#ef4444] text-sm'>{loginHandler.errorMessage}</div>}
      </div>
      </div>
  );
}