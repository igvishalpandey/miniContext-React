import React, {useState, useContext} from 'react';
import UserContext from '../context/UserContext';

function Login() {
    const[username, setUsername]= useState('');
    const[pwd, setPwd]= useState('');

    const {setUser}= useContext(UserContext);

    const handleSubmit= (e)=>{
        e.preventDefault();
        setUser({username, pwd});
    }

  return (
    <div>
        <h2>Login</h2>
        <input type="text" value={username}
        onChange={(e)=>setUsername(e.target.value)} placeholder='username'/>
        {"  "}
        <input type="text" value={pwd}
        onChange={(e)=>setPwd(e.target.value)} placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login;