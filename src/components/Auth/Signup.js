import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Set the height to cover the full page */
  background-image: linear-gradient(45deg, #ff0066, #3300cc); /* Add a gradient background */
  color: #fff;
`;

const SignupForm = styled.form`
  background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent background */
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 80%; /* Adjust the width for responsiveness */
  max-width: 400px; /* Set a maximum width for larger screens */
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
  color: #333;
  width: 100%;

  &:focus {
    border-color: #ff9900;
  }
`;

const Button = styled.button`
  background-color: #ff9900;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff6600;
  }
`;

const LoginLink = styled.p`
  margin-top: 15px;
  font-size: 14px;

  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
      color: #ff9900;
    }
  }
`;

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add signup logic here
    };

    return (
        <Container>
            <SignupForm onSubmit={handleSubmit}>
                <Title>Signup</Title>
                <Input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit">Signup</Button>
            </SignupForm>
            <LoginLink>
                Already have an account? <Link to="/login">Login</Link>
            </LoginLink>
        </Container>
    );
};

export default Signup;
