import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const ViewPet = props => {

    const {id} = props;

    const [pet, setPet] = useState({
        name: "",
        type: "",
        desc: "",
        skill1: "",
        skill2: "",
        skill3: "",
    });

    useEffect( () => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(response => {
                if(response.data.message === "error" || response.data.data === null){
                    navigate("/");
                } else {
                    setPet(response.data.results);
                }
            })
            .catch(err => console.log(err));
    }, [id])

    const deleteHandler = i => {
        axios.delete(`http://localhost:8000/api/pets/${id}/delete`)
            .then(response => {
                setPet(pet);
                navigate("/");
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Pet Shelter</h1>
            <h2>Details about: {pet.name}</h2>
            <Link to="/">back to home</Link>
            <button onClick = {() => deleteHandler(pet)}>Adopt {pet.name}</button>

            <h3>Pet type: {pet.type}</h3>
            <h3>Description: {pet.desc}</h3>
            <h3>Skills: {pet.skill1} {pet.skill2} {pet.skill3}</h3>
        </div>
    )
}

export default ViewPet
