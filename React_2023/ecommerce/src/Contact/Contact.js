import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import pic from './contact.png';
import './Contact.css'
import { useState } from 'react';
import NavbarComponent from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


export default function Contact (){

    const [name,setName] = useState([]);
    const [email,setEmail] = useState([]);
    const [message,setMessage] = useState([]);
    const [details,setDetails] = useState([]);


    let initials = {
            name : '',
            email : '',
            message : ''
    }
  
    const handleName = (e) =>{
        setName(e.target.value);
    }

    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }

    const handleMessage = (e) =>{
        setMessage(e.target.value);
    }

    const handleButton = (e) =>{
        e.preventDefault();
        
        initials.name = name;
        initials.email = email;
        initials.message = message;
        setDetails((details)=> [...details, initials]);

        setName('');
        setEmail('');
        setMessage('');

    }


    return(
        <>
            <NavbarComponent />
            <Container>
                <Row>
                    <Col className='col-12 contactDprime'>
                        <h4>D-Prime Watches</h4>
                    </Col>
                </Row>
                <Row className='contactRow'>
                    <Col className='d-none d-lg-block d-flex justify-content-center py-3'>
                        <img src={pic} className='contactImg' alt='contact-img'/>
                    </Col>
                    <Col className='col-12 col-lg-6'>
                        <Form className='contactForm mx-5 my-5' onSubmit={handleButton}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className='contactLabel'>Name</Form.Label>
                                <Form.Control  onChange={handleName} size = 'sm' type="text" value={name} placeholder="Enter your full name" />
                            </Form.Group>
                            <Form.Group className="mb-3"  controlId="exampleForm.ControlInpu21">
                                <Form.Label  className='contactLabel'>Email address</Form.Label>
                                <Form.Control onChange={handleEmail} size = 'sm' type="email" value={email} placeholder="name@gmail.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label  className='contactLabel'>Message</Form.Label>
                                <Form.Control as="textarea" onChange={handleMessage} size='sm' rows={5} value={message} placeholder='Describe your issue' />
                            </Form.Group>
                            <Button type='submit' className='contactButton text-center'>Enter</Button>

                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}