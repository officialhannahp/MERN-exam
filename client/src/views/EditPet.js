import React, { useState, useEffect } from 'react'
import PetForm from '../components/PetForm';
import axios from 'axios';
import {navigate, Link} from '@reach/router';


const initialErrors = {
    name: '',
    style: '',
    desc: ''
}

const EditPet = props => {

    const {id} = props;

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
        axios.put(`http://localhost:8000/api/pets/${id}/update`, pet)
            .then (response => {
                const {message, results} = response.data;
                if(message === "success"){
                    navigate(`/pets/${id}`);
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

    useEffect( () => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(response => {
                if(response.data.message === "error" || response.data.data === null ) {
                    navigate("/");
                } else {
                    setPet(response.data.results);
                }
            })
            .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            <h1>Pet Shelter</h1>
            <h2>Edit {pet.name}</h2>
            <Link to="/">Back to Home</Link>

            <PetForm 
                changeHandler = {changeHandler}
                submitHandler ={submitHandler}
                pet = {pet}
                errors = {errors}
                action = "Edit Pet"
            />

        </div>
    )
}
export default EditPet;
