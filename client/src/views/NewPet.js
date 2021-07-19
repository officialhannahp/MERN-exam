import React, { useState } from 'react'
import PetForm from '../components/PetForm';
import { Link, navigate } from '@reach/router';
import axios from 'axios';


const initialErrors = {
    name: '',
    style: '',
    desc: ''
}

const NewPet = () => {
    const [pet, setPet] = useState({
        name: "",
        type: "",
        desc: "",
        skill1: "",
        skill2: "",
        skill3: "",
    });

    const [errors, setErrors] = useState(initialErrors);


    const changeHandler = e => {
        setPet({
            ...pet, [e.target.name]: e.target.value
        });
    };

    const submitHandler = e => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/pets`, pet)
            .then (response => {
                const {message, results} = response.data;
                if(message === "success"){
                    navigate(`/`);
                } else {
                    const newErrors = {...initialErrors};
                    for(const key in results.errors){
                        newErrors[key] = results.errors[key].message;
                    }
                    setErrors(newErrors)
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Pet Shelter</h1>
            <h2>Know a pet needing a home?</h2>
            <Link to="/">Back to Home</Link>

            <PetForm 
                changeHandler = {changeHandler}
                submitHandler ={submitHandler}
                pet = {pet}
                errors = {errors}
                action = "Add Pet"
            />

        </div>
    )
}

export default NewPet
