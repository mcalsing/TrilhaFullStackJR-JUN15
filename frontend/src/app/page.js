"use client"

import { useRouter } from 'next/navigation';
import Image from "next/image";
import {FaAt, FaLock} from "react-icons/fa"
import {FiLoader} from "react-icons/fi"
import { useState } from "react";
import axios from 'axios';

const URL = 'https://trilhafullstack.onrender.com'
// const URL = 'http://localhost:3334'

export default function Home() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      if(!loginData.email || !loginData.password) {
        setIsLoading(false);
        setErrorMessage('Preencha todos os campos');
        return
      }
      const response = await axios.post(`${URL}/login`, { email: loginData.email, password: loginData.password });
      const dataToStorage = response.data;
  
      const dataToStorageJSON = JSON.stringify(dataToStorage);
      window.localStorage.setItem("tokenFullStack", dataToStorageJSON);
  
      if(response.status === 200) {
        router.push("/components/myProjects");            
      }
    } catch (error) {    
      setIsLoading(false);
      setErrorMessage(error.response.data.message);    
    }

  };

  return (
    <main className="flex flex-col">
      <div className="h-[500px] lg:mx-16 xl:mx-28 2xl:mx-48 grid grid-cols-2">
        <div className="bg-[#ef4444] rounded-s-lg relative">
          {/* <Image className="relative invert" src="/black_ink_circle.png" alt="logo" width={500} height={24}></Image> */}
          <Image className="absolute top-14 ml-32" src="/menina_fundo.png" alt="log" width={300} height={24}></Image>
          <h1 className="absolute xl:right-8 2xl:right-14 xl:top-6 2xl:top-10 top-1 text-black lg:text-lg xl:text-2xl 2xl:text-3xl font-bold">Código Certo</h1>
          <h1 className="absolute xl:right-0 2xl:right-6 xl:top-14 2xl:top-20 top-7 text-white lg:text-md xl:text-lg 2xl:text-xl">Construindo o amanhã, hoje.</h1>
        </div>
        <div className="text-xl flex flex-col items-center justify-center border-2 border-red-500 rounded-e-lg">
          <h1 className="text-3xl text-white">Bem-Vindo!</h1>
          <form className="p-10 rounded-md" onSubmit={handleLogin}>
            <div className="pb-5 flex relative">
              <input 
                type="email"
                placeholder="E-mail"
                className="py-2 px-5 rounded-xl w-full"
                onChange={(e) => setLoginData((prevState) => ({...prevState, email: e.target.value}))}
                />
                <FaAt className="absolute right-1 top-3 w-3"/>
            </div>
            <div className="pb-2 flex relative">
              <input 
                type="password" 
                placeholder="Senha"
                className="py-2 px-5 rounded-xl w-full"
                onChange={(e) => setLoginData((prevState) => ({...prevState, password: e.target.value}))}
              />
              <FaLock className="absolute right-1 top-3 w-3"/>
            </div>
            <div className="text-white relative">
              <a className="absolute right-0 text-base" href="#">Esqueceu a senha?</a>
            </div> 
            <div className="mt-11 flex flex-col items-center">
              <div className="border-b border-[#ef4444] mb-8 w-2/3"></div>
              <button 
                className="bg-[#ef4444] relative text-white text-2xl w-full h-10 rounded-md"
                onClick={handleLogin}
              >
                {
                  isLoading  && (
                  <FiLoader className="text-white animate-spin ml-24 top-2 absolute" />
                  )
                }
                <span>Entrar</span>
              </button>
            </div>
            <div className="text-white mt-5 flex justify-center">
              <a className="text-base" href="/components/createAccount">Criar Conta</a>
            </div>
          </form>
          {errorMessage && <div className='text-[#ef4444] text-sm'>{errorMessage}</div>}
        </div>
      </div>
    </main>
  );
}