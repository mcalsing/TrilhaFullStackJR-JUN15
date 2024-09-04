"use client"

// para "funcionar" localstorage no lado servidor
const isBrowser = typeof window !== 'undefined';

let NAMEFROM = '';

if (isBrowser && window.localStorage.getItem("tokenFullStack")) {
  const dataFromLocalStorageString = localStorage.getItem("tokenFullStack");
  const dataFromLocalStorageJSON= JSON.parse(dataFromLocalStorageString);
  NAMEFROM = dataFromLocalStorageJSON.user
}

export default function Profile() {

  return (
    <div>
      <h1 className="text-slate-100">{`Bem-Vindo ao seu perfil ${NAMEFROM}`}</h1>
      
    </div>
  );
}