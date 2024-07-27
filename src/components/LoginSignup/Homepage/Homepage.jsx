import React from 'react'
import './Homepage.css'
import PetList from '../PetList/PetList'
import { useNavigate } from 'react-router-dom'

export const Homepage = ({pets, setPets}) => {
  const navigate = useNavigate();
  const addPets = () => {
    navigate("/addPets");
  }

  const handleDelete = (id) => {
    const newPets = pets.filter(pet => pet.id !== id);
    setPets(newPets);
  }

  const handleEdit = (id) => {
    navigate(`/editPet/${id}`);
  }

  return (
    
    <div className="home">
      <div className='heading'>
         <h1>Welcome to the The Pet Shop!</h1>
 <PetList pets={pets} handleDelete={handleDelete} handleEdit={handleEdit} />      
 </div>
     
      
<button class="button" type="button" onClick={addPets}>
  <span class="button__text">Add Pets</span>
  <span class="button__icon"><svg class="svg" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg></span>
</button>

    </div>
   
     
  );
}

export default Homepage;
