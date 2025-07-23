import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../auth'


function Login({ setAuth }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
  e.preventDefault();

  const success = await login(username, password); // << await it properly
  if (success) {
    setAuth(true);
    navigate('/items');
  } else {
    setError('Invalid credentials');
  }
};


  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name ="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
