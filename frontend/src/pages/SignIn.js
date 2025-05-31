import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import { Button, FormGroup, PasswordInput, Stack, TextInput, Link} from '@carbon/react';

const SignIn = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/signin', form);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <form onSubmit={handleSubmit}>
        <FormGroup
          legendId="signin-form"
          legendText="Sign In"
          style={{ maxWidth: '500px' }}
        >
          <Stack gap={7}>
            <TextInput
              id="email-input"
              labelText="Email"
              type="email"
              placeholder="you@example.com"
              required
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />
            <PasswordInput
              id="password-input"
              labelText="Password"
              placeholder="Enter your password"
              required
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
            />
            <Button type="submit">Sign In</Button>
          </Stack>
        </FormGroup>
      </form>

      <p style={{ marginTop: '1rem' }}>
        Don't have an account ? 
         <Link href="/signup" >Create a new account</Link>
      </p>
    </div>
  );
};

export default SignIn;
