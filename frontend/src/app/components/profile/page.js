"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const URL = 'https://trilhafullstack.onrender.com'
//const URL = 'http://localhost:3334';

export default function Profile() {
  const [firstName, setFirstName] = useState('');

  const router = useRouter();

  const handleGetProfile = async () => {
    try {      
      const dataFromLocalStorageString = localStorage.getItem('tokenFullStack');
      const dataFromLocalStorageJSON = JSON.parse(dataFromLocalStorageString);
      const token = dataFromLocalStorageJSON.token;

      const { data } = await axios.get(`${URL}/user/${dataFromLocalStorageJSON.id}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      
      setFirstName(data.user.firstName);

    } catch (error) {
      router.push('/');
      console.error(error.response.data.error);
    }
  };
  
  useEffect(() => {
    handleGetProfile();
  }, []);
   
  return (
    <div className="text-black flex flex-col w-full h-full">         
        <span className="text-white font-light text-2xl">{`Bem vindo, ${firstName}`}</span>
    </div>
  );
}