'use client';

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { handleSignIn } from '@/actions/sign-in';

function LoginPage() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      console.log('Login');
      console.log(username);
      console.log(password);

      await handleSignIn({ username, password });
      console.log('login success');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Row className='px-4 my-5'>
        <Col>
          <h1>Login</h1>
        </Col>
      </Row>
      <Row className='px-4 my-5'>
        <Col sm={6}>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicText'>
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter User Name'
                onChange={(evt) => setUserName(evt.target.value)}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter Password'
                onChange={(evt) => setPassword(evt.target.value)}
              />
            </Form.Group>
            <Button variant='primary' type='button' onClick={handleLogin}>
              Login &gt;&gt;
            </Button>
            &nbsp;&nbsp;
            <Link href='/register'>
              <Button variant='outline-primary'>Register</Button>
            </Link>
            &nbsp;&nbsp;
            <Link href='/'>
              <Button variant='outline-primary'>Cancel</Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
