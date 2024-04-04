import React from 'react'
import Button from '../components/Button'

const InfoUser = ({ className, classNameContainer, textClassName, userName, lastName, email, phone, gender, employment, city, avatar, avatarName, onClick, buttonClassname }) => {
    return (
        <div className={className}>
            <div className={classNameContainer}>
                <div className={textClassName}>
                    <h2>{userName} {lastName}</h2>
                    <h4>Email: {email}</h4>
                    <h4>Contacto: {phone}</h4>
                    <h4>Género: {gender}</h4>
                    <h4>Puesto: {employment}</h4>
                    <h4>Ciudad: {city}</h4>
                </div>
                <img src={avatar} alt={avatarName}></img>
            </div>
            <Button buttonText={"Cerrar"} onClick={onClick} className={buttonClassname}/>
        </div>
    )
}

export default InfoUser