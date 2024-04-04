import React, { useEffect, useState } from 'react'
// import { DataUser } from '../context/UsersDataProvider';
import Button from '../components/Button';
import InfoUser from './InfoUser';
// import { useNavigate } from 'react-router-dom';

export const Users = () => {

    const [modal, setModal] = useState(false);
    const [listUsers, setListUsers] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        const usersData = localStorage.getItem("users");
        if(usersData) {
            const storageUsers = JSON.parse(usersData);
            setListUsers(storageUsers);
        }
    }, []);

    const showInformation = (id) => {
        const usersList = JSON.parse(localStorage.getItem("users"));
        const filterUser = usersList.filter(user => user.id === id);
        setSelectedUser(filterUser[0]);
        setModal(true);
    }

    const showOffInformation = () => {
        setSelectedUser(null);
        setModal(false);
    }

  return (
    <div className='p-8 bg-slate-700'>
        <div className='grid lg:grid-cols-3 gap-4 justify-items-center md:grid-cols-2 sm:grid-cols-1'>
            {
                listUsers ? listUsers.map((user, i) => (
                    <div className='flex flex-col p-4 justify-center items-center bg-blue-500 rounded-2xl shadow-white' key={i}>
                        <h2>Nombre: {user.first_name}</h2>
                        <h4>Email: {user.email}</h4>
                        <p>Teléfono: {user.phone_number}</p>
                        <img src={`https://robohash.org/${user.uid || user.first_name || i}.png`}></img>
                        <Button buttonText={"Información"} className={"bg-emerald-500 p-4 m-4 rounded-xl font-bold hover:bg-blue-900 hover:text-white"} onClick={() => showInformation(user.id)}/>
                    </div>
                )) : "No users"
            }

            {
                modal && <InfoUser className={"w-8/12 h-auto bg-blue-400 fixed p-8 rounded-3xl flex flex-col gap-8 items-center"} userName={selectedUser.first_name} lastName={selectedUser.last_name} email={selectedUser.email} phone={selectedUser.phone_number} gender={selectedUser.gender} employment={selectedUser.employment["title"]} city={selectedUser.address['city']} avatar={selectedUser.avatar} avatarName={selectedUser.first_name} classNameContainer={"font-bold flex justify-evenly items-center w-full md:flex-col sm:flex-col"} buttonClassname={"bg-rose-600 w-20 rounded-3xl font-bold p-4 hover:bg-white"} textClassName={"flex flex-col gap-2"} onClick={showOffInformation}/>
            }

        </div>
    </div>
  )
}

export default Users;