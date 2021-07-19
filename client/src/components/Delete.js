import React from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';


const Delete = props => {

    const {id} = props;

    const deleteHandler = () => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/pets/${id}/delete`)
            .then(res => navigate('/'))
            .catch(err => navigate('/'))
    }

    return (
        <div>
            <input type="button" value="Delete" onClick={deleteHandler} />
        </div>
    )
}

export default Delete
