import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./EditPets.css";

const EditPet = ({ pets, setPets }) => {

    const { id } = useParams();
    const petToEdit = pets.find(pet => pet.id === id);
    const [input, setInput] = useState({ name: '', type: '', breed: '', price: '' });
    const navigate = useNavigate();

    useEffect(() => {
        if (petToEdit) {
          setInput({ name: petToEdit.name, type: petToEdit.type, breed: petToEdit.breed, price: petToEdit.price });
        }
      }, [petToEdit]);
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedPets = pets.map(pet =>
          pet.id === id ? { ...pet, ...input } : pet
        );
        setPets(updatedPets);
        navigate('/home');
      };

return (
  <form onSubmit={handleSubmit}>
    <div className='container'>
      <div className='header'>
        <div className='text'>Edit Pet</div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <input type='text' placeholder="Name" name="name" value={input.name} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
        </div>
        <div className='input'>
          <input type='text' placeholder="Type" name="type" value={input.type} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
        </div>
        <div className='input'>
          <input type='text' placeholder="Breed" name="breed" value={input.breed} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
        </div>
        <div className='input'>
          <input type='text' placeholder="Price" name="price" value={input.price} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
        </div>
      </div>
      <div className='submit-container'>
        <button type="submit" className="submit">Update</button>
      </div>
    </div>
  </form>
);
};

export default EditPet;