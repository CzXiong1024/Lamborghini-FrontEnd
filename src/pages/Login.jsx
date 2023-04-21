import React, { useState, useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context/authContext/AuthContext';
import { TextInput, Button, Title } from '@mantine/core';
import { At, Eye } from 'tabler-icons-react';
import { login } from "../context/authContext/apiCalls";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch)
    navigate('/');
  }
  
  return (
  <>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div style={{ width: '50%' }}>
    <Helmet>
    <title>Login | Lamborghini E-Commerce</title>
    <meta name='description' content='Login' />
  </Helmet>
  <Title order={1} style={{ marginBottom: '10px' }}>Login</Title>
  <form>
    <TextInput
    placeholder="Enter your email"
    label="Email"
    id="email"
    onChange={(e) => setEmail(e.target.value)}
    size="md"
    icon={<At size={14} />}
    required
    />
    <TextInput
    placeholder="Enter your password"
    label="Password"
    id="password"
    onChange={(e) => setPassword(e.target.value)}
    size="md"
    icon={<Eye size={14} />}
    type="password"
    required
    />
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
      <Button type="Submit" onClick={handleLogin} disabled={isFetching} style={{ marginRight: '5px' }}>Login</Button>
      <Link to='/register'>
        <Button type="Submit" color="orange">Not A User?</Button>
      </Link>
    </div>
  </form>
  <div>
  < img src="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Flagship_100_Blog_2880x1800_Apparel.jpg" alt="shopping" style={{ width: '100%' }} />
  </div>
    </div>
  </div>
  
  </>
  )
}

export default Login;