/*import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import Signup from './components/signup';
import MyResultPage from './pages/MyResultPage';

function RequiredAuth({children})
{
   const isLoggedIn = Boolean(localStorage.getItem('authToken'));
   const location = useLocation();

   if(!isLoggedIn)
   {
       return <Navigate to='/login'state={{from: location}} replace />;
   }

   return children;
}

const App = () => {
   return(
      <Routes>
         <Route path="/" element={<Home /> } />

         <Route path='/login' element={<Login />} />

         <Route path='/signup' element={<Signup />} />

         <Route path='/result' element={
           <RequiredAuth>
             <MyResultPage />
           </RequiredAuth>
         } />
      </Routes>
   );
};

export default App; */

import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Login from './components/Login';
import Signup from './components/signup';
import MyResultPage from './pages/MyResultPage';

function RequiredAuth({ children }) {
  const isLoggedIn = Boolean(localStorage.getItem('authToken'));
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/result"
          element={
            <RequiredAuth>
              <MyResultPage />
            </RequiredAuth>
          }
        />
      </Routes>
    </>
  );
};

export default App;