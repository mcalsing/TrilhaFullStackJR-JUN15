"use client"

import Image from "next/image";
import {FaUser, FaLock} from "react-icons/fa"
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = (event) => {
    event.preventDefault();

    console.log(email);
    console.log(password);
  };

  return (
    <main className="flex flex-col">
      <div className="h-[500px] lg:mx-16 xl:mx-28 2xl:mx-48 grid grid-cols-2">
        <div className="bg-[#ef4444] rounded-md relative">
          {/* <Image className="relative invert" src="/black_ink_circle.png" alt="logo" width={500} height={24}></Image> */}
          <Image className="absolute top-14 ml-32 " src="/menina_fundo.png" alt="log" width={300} height={24}></Image>
          <h1 className="absolute xl:right-8 2xl:right-14 xl:top-6 2xl:top-10 top-1 text-black lg:text-lg xl:text-2xl 2xl:text-3xl font-bold">Código Certo</h1>
          <h1 className="absolute xl:right-0 2xl:right-6 xl:top-14 2xl:top-20 top-7 text-white lg:text-md xl:text-lg 2xl:text-xl">Construindo o amanhã, hoje.</h1>
        </div>
        <div className="bg-black text-xl flex flex-col items-center justify-center rounded-s-md">
          <h1 className="text-3xl text-white">Bem-Vindo!</h1>
          <form className="bg-black p-10 rounded-md" onSubmit={HandleSubmit}>
            <div className="pb-5 flex relative">
              <input 
                type="email"
                placeholder="E-mail"
                className="py-2 px-8 rounded-3xl"
                onChange={(e) => setEmail(e.target.value)}
                />
                <FaUser className="absolute right-2 top-3"/>
            </div>
            <div className="pb-2 flex relative">
              <input 
                type="password" 
                placeholder="Senha"
                className="py-2 px-8 rounded-3xl"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FaLock className="absolute right-2 top-3"/>
            </div>
            <div className="text-white relative">
              <a className="absolute right-0 text-base" href="#">Esqueceu a senha?</a>
            </div> 
            <div className="mt-11 flex flex-col items-center">
              <div className="border-b border-red-500 mb-11 w-2/3"></div>
              <button className="bg-[#ef4444] text-black text-2xl w-full h-10 rounded-md">Entrar</button>
            </div>
            <div className="text-white mt-5 flex justify-center">
            
              <a className="text-base" href="#">Criar Conta</a>
            </div>
          </form>
        </div>
      </div>
      <footer className="absolute bottom-0 bg-red-500 text-white w-full py-2">
        <span class="block text-sm text-white sm:text-center">© 2024 <a href="https://www.linkedin.com/in/marcelocalsing/" target="_blank">Marcelo Calsing</a>. All Rights Reserved.</span>
      </footer>
    </main>
  );
}