import React, { useState } from 'react'

const PetForm = props => {
    const { errors, action, submitHandler, changeHandler, pet } = props;


    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    {
                        errors.name ?
                        <span>{errors.name}</span>
                        :
                        ''
                    }
                    <label htmlFor="name">Pet Name: </label>
                    <input type="text" name="name" value={pet.name} onChange={changeHandler} />
                </div>

                <div>
                    {
                        errors.type ?
                        <span>{errors.type}</span>
                        :
                        ''
                    }
                    <label>Pet Type: </label>
                    <input type="text" name="type" value={pet.type} onChange={changeHandler} />
                </div>

                <div>
                    {
                        errors.desc ?
                        <span>{errors.desc}</span>
                        :
                        ''
                    }
                    <label>Description: </label>
                    <input type="text" name="desc" value={pet.desc} onChange={changeHandler} />
                </div>

            <h3>Skills (optional):</h3>

                <div>
                    <label>Skill 1: </label>
                    <input type="text" name="skill1" value={pet.skill1} onChange={changeHandler} />
                </div>

                <div>
                    <label>Skill 2: </label>
                    <input type="text" name="skill2" value={pet.skill2} onChange={changeHandler} />
                </div>

                <div>
                    <label>Skill 3: </label>
                    <input type="text" name="skill3" value={pet.skill3} onChange={changeHandler} />
                </div>

                <input type="submit" value={action} />
            </form>
        </div>
    )
}

export default PetForm
