// src/auth.js

export const login = (username, password) => {
  // This is where you’d call your real backend
  if (username === 'admin' && password === 'admin') {
    localStorage.setItem('token', 'fake-jwt-token')
    return true
  }
  return false
}

export const logout = () => {
  localStorage.removeItem('token')
}

export const isAuthenticated = () => {
  return !!localStorage.getItem('token')
}
