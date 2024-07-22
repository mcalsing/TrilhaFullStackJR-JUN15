"use client";

import {FaUser, FaLock, FaAt} from "react-icons/fa"

export default function CreateAccount() {
  return (
    <main className="bg-black text-xl flex flex-col items-center justify-center rounded-s-md">
      <h1 className="text-white text-4xl mt-5">Criar conta</h1>
      <form className="bg-black p-10 rounded-md">
        <div className="pb-5 flex relative">
          <input
            type="text"
            placeholder="Nome completo"
            className="py-2 px-8 rounded-3xl"
            />
            <FaUser className="absolute right-2 top-3"/>
        </div>
        <div className="pb-5 flex relative">
          <input
            type="email"
            placeholder="E-mail"
            className="py-2 px-8 rounded-3xl"
            />
            <FaAt className="absolute right-2 top-3"/>
        </div>
        <div className="pb-2 flex relative">
          <input 
            type="password" 
            placeholder="Senha"
            className="py-2 px-8 rounded-3xl"
          />
          <FaLock className="absolute right-2 top-3"/>
        </div>
        <div className="mt-11 flex flex-col items-center">
          <div className="border-b border-red-500 mb-11 w-2/3"></div>
          <button className="bg-[#ef4444] text-black text-2xl w-full h-10 rounded-md">Entrar</button>
        </div>
      </form>
    </main>
  );
}