import React, { useState } from 'react';
import './App.css';
import logo from './logo.png';
const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);
  const [showLoginInterface, setShowLoginInterface] = useState(false);

  const handleUserSelection = (userType) => {
    setSelectedUser(userType);
    setShowLoginInterface(true);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="container">
      
      <div className='user-selection-box'>
      <div>
      <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
      </div>
            
  
        <button className='btn' onClick={() => handleUserSelection('admin')}>Admin</button>
        <button className='btn' onClick={() => handleUserSelection('manager')}>Manager</button>
        <button className='btn' onClick={() => handleUserSelection('employee')}>Employee</button>
        </div>
      </div>
      <div className={`login-interface-box ${showLoginInterface ? 'show' : ''}`}>
       {/* {selectedUser && (
          <div> */}
            <h2>Login as {selectedUser}</h2>
            <form>
              
              {selectedUser === 'admin' && (
                <>
            
                  <label htmlFor="adminUsername">Admin Username:</label>
                  <input type="text" id="adminUsername" />

                  <label htmlFor="adminPassword">Admin Password:</label>
                  <input type="password" id="adminPassword" />

                  <div>
                <label htmlFor="rememberMe">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                  Remember Me
                </label>
              </div>

                  <button type="submit">Login as Admin</button>
                </>
              )}

              {selectedUser === 'manager' && (
                <>
                  {/* Manager login form */}
                  <label htmlFor="managerUsername">Manager Username:</label>
                  <input type="text" id="managerUsername" />

                  <label htmlFor="managerPassword">Manager Password:</label>
                  <input type="password" id="managerPassword" />

                  <div>
                <label htmlFor="rememberMe">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                  Remember Me
                </label>
              </div>

                  <button type="submit">Login as Manager</button>
                </>
              )}

              {selectedUser === 'employee' && (
                <>
                  {/* Employee login form */}
                  <label htmlFor="employeeUsername">Employee Username:</label>
                  <input type="text" id="employeeUsername" />

                  <label htmlFor="employeePassword">Employee Password:</label>
                  <input type="password" id="employeePassword" />

                  <div>
                <label htmlFor="rememberMe">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                  Remember Me
                </label>
              </div>

                  <button type="submit">Login as Employee</button>
                </>
              )}

              

              
            </form>
          </div>
        {/* )} */}
      </div>
    // </div>
  );
};

export default App;
