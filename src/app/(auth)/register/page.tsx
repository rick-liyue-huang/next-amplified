'use client';

import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { handleSignUp } from '@/actions/sign-up';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function RegisterPage() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhoneNumber] = useState('');

  const router = useRouter();

  const handleRegister = async () => {
    try {
      console.log(username);
      console.log(password);
      console.log(email);
      // console.log(phone_number);

      await handleSignUp({ username, password, email });
      console.log('success');
      router.push('/confirm-register');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Row className='px-4 my-5'>
        <Col>
          <h1>Register</h1>
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
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                onChange={(evt) => setEmail(evt.target.value)}
              />
              <Form.Text className='text-muted'>
                We'll never share your email!
              </Form.Text>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type='phone'
                placeholder='Enter phone'
                onChange={(evt) => setPhoneNumber(evt.target.value)}
              />
              <Form.Text className='text-muted'>
                We'll never share your phone!
              </Form.Text>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter Password'
                onChange={(evt) => setPassword(evt.target.value)}
              />
            </Form.Group>
            <Button variant='primary' type='button' onClick={handleRegister}>
              Register &gt;&gt;
            </Button>
            &nbsp;&nbsp;
            <Link href='/login'>
              <Button variant='outline-primary'>Login</Button>
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
