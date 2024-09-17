import React from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../src/utils';

function Logout() {
    const navigate = useNavigate();
    const handleLogout = (e) => {
      localStorage.removeItem('token');
      localStorage.removeItem('loggedInUser');
      handleSuccess('User Loggedout');
      setTimeout(() => {
          navigate('/login');
      }, 1000)
  }
  return (
    // <div>
    //    <button onClick={handleLogout}>Logout</button>
    // </div>
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full viewport height to center vertically
        padding: '10px', // General padding
        margin: '0 auto', // Horizontal centering for small devices
      }}>
        <button 
          onClick={handleLogout} 
          style={{
            padding: '10px 20px', // Responsive padding
            fontSize: '16px', // Default size
            border: 'none',
            // backgroundColor: '#333',
            backgroundColor: 'rgb(128,0,128)',
            color: '#fff',
            cursor: 'pointer',
            borderRadius: '5px'
          }}
        >
          Logout
        </button>
      </div>
      
  )
}

export default Logout;
