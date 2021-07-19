import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const PetDashboard = () => {

    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')

            .then ((res) => {
                // console.log(res.data.name)
                setPets(res.data.results)
            })
            .catch((err) => console.log(err));
    }, [])

    return (
        <div>
            <h1>These pets are looking for a good home</h1>
            <Link to="/pets/new">add a pet to the shelter</Link>

            <table>
                <tr>
                    <td>Name</td>
                    <td>Type</td>
                    <td>Actions</td>
                </tr>
                { pets.map((pet, i) =>
                        <tr key={i}>
                            <td>{pet.name}</td>
                            <td>{pet.type}</td>
                            <td><Link to={`/pets/${pet._id}`}>details</Link> | <Link to={`/pets/${pet._id}/edit`}>edit</Link></td>
                        </tr>
                )}
            </table>
        </div>
    )
}

export default PetDashboard
