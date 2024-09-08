"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const URL = 'https://trilhafullstack.onrender.com'
// const URL = 'http://localhost:3334/user';

export default function Profile() {
  const [profileData, setProfileData] = useState({
    error: false,
    errorMessage: 'Error on load profile',
    isLoading: true,
    firstName: '',
  });

  const router = useRouter();  
  const handleGetProfile = async () => {
    const dataFromLocalStorageString = localStorage.getItem('tokenFullStack');
    const dataFromLocalStorageJSON = JSON.parse(dataFromLocalStorageString);    
    if(!dataFromLocalStorageJSON) return router.push('/');
    
    const token = dataFromLocalStorageJSON.token;

    try {      
      setProfileData((prevState) => ({ ...prevState, isLoading: true }));

      const { data } = await axios.get(`${URL}/${dataFromLocalStorageJSON.id}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      
      setProfileData((prevState) => ({
        ...prevState,
        error: false,
        errorMessage: '',
        firstName: data.user.firstName,
        isLoading: false
      }));

      setFirstName(data.user.firstName);

    } catch (error) {
        router.push('/');              
    }
  };
  
  useEffect(() => {
    handleGetProfile();
  }, []);
   
  return (
    <div className="text-black flex flex-col w-full h-full">         
        {profileData.error && <span className="text-red-500">{profileData.errorMessage}</span>}
        <span className="text-white font-light text-2xl">{`Bem vindo, ${profileData.firstName}`}</span>
    </div>
  );
}