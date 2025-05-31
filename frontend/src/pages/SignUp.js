import React, { useState } from 'react';
import api from '../api';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/signup', form);
      alert('Account created! Please sign in.');
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required onChange={e => setForm({ ...form, name: e.target.value })} />
        <input type="email" placeholder="Email" required onChange={e => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" required onChange={e => setForm({ ...form, password: e.target.value })} />
        <button type="submit">Sign Up</button>
      </form>
      <button onClick={() => navigate('/')}>Go back to Sign In</button>
    </div>
  );
};

export default SignUp;
