import React, { useContext } from 'react'
import Button from '../components/Button'
import { DataUser } from '../context/UsersDataProvider'
import { getData } from '../functions/fetch';
import { useNavigate } from 'react-router-dom';

export const Home = () => {

    const { setUsers } = useContext(DataUser);

    const navigate = useNavigate();

    const listUsers = async () => {
        try {
            const data = await getData("https://random-data-api.com/api/v2/users?size=100");
            setUsers(data);
            localStorage.setItem("users", JSON.stringify(data));
            navigate('/users');
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }

  return (
    <div className='flex justify-center items-center w-dvw h-dvh flex-col'>
        <h1 className='text-4xl m-2'>Bienvenido</h1>
        <h3 className='m-2'>Haz click para listar usuarios</h3>
        <Button className={'bg-lime-600 p-4 rounded-2xl font-bold hover:bg-black hover:text-white'} buttonText={'Click para listar'} onClick={listUsers}/>
    </div>
  )
}
