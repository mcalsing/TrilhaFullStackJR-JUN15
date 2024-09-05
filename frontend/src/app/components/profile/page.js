"use client"
// import { useEffect, useState } from 'react';

export default function Profile() {
 /*  useEffect(() => {
    const getData = async () => {
      const dataFromLocalStorageString = localStorage.getItem('tokenFullStack');
      const dataFromLocalStorageJSON = JSON.parse(dataFromLocalStorageString)
      console.log(dataFromLocalStorageJSON.id);
      const id = dataFromLocalStorageJSON.id;
  
  
      const response = await axios.get("http://localhost:3334/user/id");
      console.log(response.data)
      
    }
    getData();
  });
 */
  return (
    <div>
      <h1 className="text-slate-100">{`Bem-vindo ao seu perfil`}</h1>
    </div>
  );
}