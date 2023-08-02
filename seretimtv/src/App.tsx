import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Signup from './auth/Signup';
import Signin from './auth/Signin';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import Movies from './components/Movies';
import Ipuspass from './auth/Ipuspass';
import Profileuser from './auth/Profile';



interface Context {
  admin: boolean
  setAdmin: Function
  
}

export const AppContext = createContext<Context | null>(null);


function App() {
  const [admin, setAdmin] = useState(false);
    

  
  return (
    
    <>
    <AppContext.Provider value={{
                admin,
                setAdmin,
            }}></AppContext.Provider>
    
    <Header/>
    <Routes>
    <Route path="Signup" element={<Signup />} />
    <Route path="Signin" element={<Signin />} />
    <Route path="Homepage" element={<Homepage />} />
    <Route path="Movies" element={<Movies />} />
    <Route path="Ipuspass" element={<Ipuspass />} />
    <Route path="Profile" element={<Profileuser />} />

    </Routes>
    <Footer/>
    </>
  );
}

export default App;
