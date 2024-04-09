import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {
  return (
    <UserContextProvider>
      <p>User Login</p>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App