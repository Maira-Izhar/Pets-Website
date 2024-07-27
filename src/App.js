import React, {useState} from 'react';
import { BrowserRouter as Router, Route,  Routes, BrowserRouter} from 'react-router-dom';
import LoginSignup from './components/LoginSignup/Signup/Signup';
import Login from './components/LoginSignup/Login/Login'
import  Homepage  from './components/LoginSignup/Homepage/Homepage';
import Navbar from './components/LoginSignup/Navbar/Navbar';
import AddPets from './components/LoginSignup/AddPets/AddPets';
import PetList from './components/LoginSignup/PetList/PetList';
import EditPet from './components/LoginSignup/EditPets/EditPets';




function App() {
  const [pets, setPets] = useState([]);
  return (

    <BrowserRouter>
      <Navbar/>
      <div className='Pages'>
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/home" element={<Homepage pets={pets} setPets={setPets} />} />
          <Route path="/addPets" element={<AddPets pets = {pets} setPets={setPets}/>}/>
          <Route path="/petList" element={PetList}/>
          <Route path="/editPet/:id" element={<EditPet pets={pets} setPets={setPets} />} />
        </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
