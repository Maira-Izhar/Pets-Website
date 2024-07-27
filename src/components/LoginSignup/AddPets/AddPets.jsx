import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import "./AddPets.css"
import PetList from '../PetList/PetList'

const AddPets = ({ pets, setPets }) => {
  const [input, setInput] = useState({ name: '', type: '', breed: '', price: '' });
  const [ID, setId] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPets([...pets, { ...input, id: uuidv4() }]);
    navigate('/home');
    
  };


  return (
    <form onSubmit={handleSubmit}>
        <div className='container'>
           <div className='header'>
               <div className='text'>Add Pet</div>
           </div>
           <div className='inputs'>
               <div className='input'>
                     <input type='text' placeholder="Name" name="name" value={input.name} onChange={(e) => setInput({...input,[e.target.name]:e.target.value,})}/>
               </div>
               <div className='input'>
                     <input type='text' placeholder="Type" name="type" value={input.type} onChange={(e) => setInput({...input,[e.target.name]:e.target.value,})}/>
               </div>
               <div className='input'> 
            <input type='text' placeholder="Breed" name="breed" value={input.breed} onChange={(e) => setInput({...input,[e.target.name]:e.target.value,})}/>
        </div>
        <div className='input'>
            <input type='text' placeholder="Price" name="price" value={input.price} onChange={(e) => setInput({...input,[e.target.name]:e.target.value,})}/>
        </div>
           </div>
           
           <div className='submit-container'>
               <button type="submit" className="submit"  >
               Add
               </button>
           </div>
       </div>
    </form>
  );
};






export default AddPets;