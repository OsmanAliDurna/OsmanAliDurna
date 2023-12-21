import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Form.css"

const Forms = () => {

    const [show, setShow] = useState(false);
    const [requiredSatisfied, setRequiredSatisfied] = useState(false)
    const [data, setData] = useState({
        email: "",
        username: "",
        firstName: "",
        lastName: "",
        image: "",
        password: ""
    })

    const {email, username, firstName, lastName, image, password} = data;

    const handleShow = (e) => {
        e.preventDefault();
        setShow(!show);
    }

    const handleMove = (e) => {
        !requiredSatisfied && e.target.classList.add("oynak");
    }

    const handleLeave = (e) => {
        e.target.classList.remove("oynak");
    }

    const handleList = (e) => {
        setData({...data , [e.target.id] : e.target.value});
    }

    const handleFormSubmit = (e) => {
      e.preventDefault();
      setRequiredSatisfied(true);
    }

  return (
    <Form className='container w-50 mt-5' onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3 d-flex" controlId="email">
        <Form.Label className='p-2 pt-3 border border-info' style={{width:"150px"}}>Email address : </Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter e-mail address" required onChange={handleList}/>
      </Form.Group>

      <Form.Group className="mb-3 d-flex" controlId="username">
        <Form.Label className='p-2 pt-3 border border-info' style={{width:"150px"}}>Username : </Form.Label>
        <Form.Control type="text" name="username" placeholder="Enter username" required onChange={handleList}/>
      </Form.Group>

      <Form.Group className="mb-3  d-flex" controlId="firstName">
        <Form.Label className='p-2 pt-3 border border-info' style={{width:"150px"}}>First Name : </Form.Label>
        <Form.Control type="text" name="firstName" placeholder="Enter first name" required onChange={handleList}/>
      </Form.Group>

      <Form.Group className="mb-3  d-flex" controlId="lastName">
        <Form.Label className='p-2 pt-3 border border-info' style={{width:"150px"}}>Last Name : </Form.Label>
        <Form.Control type="text" name="lastName" placeholder="Enter last name" required onChange={handleList}/>
      </Form.Group>

      <Form.Group className="mb-3  d-flex" controlId="image">
        <Form.Label className='p-2 pt-3 border border-info' style={{width:"150px"}}>Image : </Form.Label>
        <Form.Control type="url" name="image" placeholder="Enter image url" required onChange={handleList}/>
      </Form.Group>

      <Form.Group className="mb-3 d-flex" controlId="password">
        <Form.Label className='p-2 pt-3 border border-info' style={{width:"185px"}}>Password : </Form.Label>
        {show ? (<Form.Control type="text" name="password" placeholder="Enter password" required onChange={handleList}/>) : (
        <Form.Control type="password" name="password" placeholder="Enter password" required onChange={handleList}/>)}
        <Button style={{width:"200px"}} variant={show ? "primary" : "danger"} type="button" onClick={handleShow}>
        {show ? "Hide" : "Show"} Password
      </Button>
      </Form.Group>
     
      <Button variant="btn btn-success" type="submit" onMouseLeave={handleLeave} onMouseEnter={handleMove}>Submit</Button>

      {requiredSatisfied && (<div>
            <p>E - MAil : {email}</p>
            <p>Username : {username}</p>
            <p>Firstname: {firstName}</p>
            <p>Lastname :{lastName}</p>
            <p>Lastname :{image}</p>
            <p>Lastname :{password}</p>
          </div>)}
    </Form>
  );
}

export default Forms;