import React, { useEffect, useRef, useState } from 'react'
// import { DataUser } from '../context/UsersDataProvider';
import Button from '../components/Button';
import InfoUser from './InfoUser';
// import { useNavigate } from 'react-router-dom';

export const Users = () => {

    const [modal, setModal] = useState(false);
    const [listUsers, setListUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [page, setPage] = useState(1);
    const loader = useRef(null);

    const fetchUsers = () => {
        fetch(`https://random-data-api.com/api/v2/users?size=10&page=${page}`)
            .then(response => response.json())
            .then(data => {
                setListUsers(prev => [...prev, ...data]);
            })
            .catch(error => console.error(error));
    }

    const showInformation = (id) => {
        // const usersList = JSON.parse(localStorage.getItem("users"));
        const filterUser = listUsers.filter(user => user.id === id);
        setSelectedUser(filterUser[0]);
        setModal(true);
    }

    const showOffInformation = () => {
        setSelectedUser(null);
        setModal(false);
    }

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "20px",
            threshold: 1.0
        };

        const observer = new IntersectionObserver(handleObserver, options);
        if (loader.current) {
            observer.observe(loader.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (page > 1) {
            fetchUsers();
        }
    }, [page]);



    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {
            setPage((prev) => prev + 1);
        }
    }

    // useEffect(() => {
    //     const usersData = localStorage.getItem("users");
    //     if(usersData) {
    //         const storageUsers = JSON.parse(usersData);
    //         setListUsers(storageUsers);
    //     }
    // }, []);



    return (
        <div className='p-8 bg-slate-700'>
            <div className='grid lg:grid-cols-3 gap-4 justify-items-center md:grid-cols-2 sm:grid-cols-1'>
                {
                    listUsers.length > 0 ? listUsers.map((user, i) => (
                        <div className='flex flex-col p-4 justify-center items-center bg-blue-500 rounded-2xl shadow-white' key={i}>
                            <h2>Nombre: {user.first_name}</h2>
                            <h4>Email: {user.email}</h4>
                            <p>Teléfono: {user.phone_number}</p>
                            <img src={`https://robohash.org/${user.uid || user.first_name || i}.png`} alt={user.first_name}></img>
                            <Button buttonText={"Información"} className={"bg-emerald-500 p-4 m-4 rounded-xl font-bold hover:bg-blue-900 hover:text-white"} onClick={() => showInformation(user.id)} />
                        </div>
                    )) : "No users"
                }
                <div ref={loader} />

                {
                    modal && <InfoUser className={"w-8/12 h-auto bg-blue-400 fixed p-8 rounded-3xl flex flex-col gap-8 items-center"} userName={selectedUser.first_name} lastName={selectedUser.last_name} email={selectedUser.email} phone={selectedUser.phone_number} gender={selectedUser.gender} employment={selectedUser.employment["title"]} city={selectedUser.address['city']} avatar={selectedUser.avatar} avatarName={selectedUser.first_name} classNameContainer={"font-bold flex justify-evenly items-center w-full md:flex-col sm:flex-col"} buttonClassname={"bg-rose-600 w-20 rounded-3xl font-bold p-4 hover:bg-white"} textClassName={"flex flex-col gap-2"} onClick={showOffInformation} />
                }

            </div>
        </div>
    )
}

export default Users;