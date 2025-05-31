import React, { useState } from 'react';
import api from '../api';
import { useNavigate, Link } from 'react-router-dom';
import { Button, FormGroup, PasswordInput, Stack, TextInput} from '@carbon/react';

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
    <div style={{ padding: '2rem' }}>
      <form onSubmit={handleSubmit}>
        <FormGroup
          legendId="signup-form"
          legendText="Sign Up"
          style={{ maxWidth: '500px' }}
          >
            <Stack gap={7}>
              <TextInput
                id="name"
                labelText="Name"
                type="name"
                placeholder="username"
                required
                onChange={e => setForm({ ...form, name: e.target.value })}
              />
              <TextInput
                id="email-input"
                labelText="Email"
                type="email"
                placeholder="you@example.com"
                required
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
              <PasswordInput
                id="password-input"
                labelText="Password"
                placeholder="Enter your password"
                required
                onChange={e => setForm({ ...form, password: e.target.value })}
              />
              <Button type="submit">Sign Up</Button>
            </Stack>
        </FormGroup>
      </form>

      <button onClick={() => navigate('/')}>Go back to Sign In</button>
    </div>
  );
};

export default SignUp;
