import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';

function Forms() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }


  return (
    <Container className="mt-4">
      <Form>
      <h1 className='text-danger'>FORMS</h1>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>{username && (<span>Hello <span className='fw-bold'>{username}</span></span>)}</Form.Label>
          <Form.Control type="text" placeholder="Enter Username" onChange={handleUsername}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter E-mail" onChange={handleEmail}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={handlePassword}/>
        </Form.Group>
        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Forms;