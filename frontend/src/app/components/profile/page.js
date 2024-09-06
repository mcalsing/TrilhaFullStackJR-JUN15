"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const URL2 = 'http://localhost:3334/user';

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

      const { data } = await axios.get(`${URL2}/${dataFromLocalStorageJSON.id}`, {
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

      console.log("response##", data.user.firstName);
      console.log("response2##", profileData.firstName);
      setFirstName(data.user.firstName);

    } catch (error) {
        router.push('/');              
    }
  };
  
  useEffect(() => {
    handleGetProfile();
  }, []);
   
  return (
    <div className="text-black flex flex-col w-full bg-slate-300 text-xl h-20">
         
        {profileData.error && <span className="text-red-500">{profileData.errorMessage}</span>}
        <span className="text-black">{`Bem vindo, ${profileData.firstName}`}</span>
    </div>
  );
}