
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import img1 from './socialImg/image1.png';
import img2 from './socialImg/image2.webp';
import img3 from './socialImg/image3.png';
import img4 from './socialImg/image4.png';
import img5 from './socialImg/image5.svg';


function Footer(){
    const [email, setEmail] = useState([]);
    const [emailArray, setEmailArray] = useState([]);


    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }

    const handleButton = () =>{
        setEmailArray((emailArray) => [...emailArray, email])
        setEmail('');
    }



    return (
        <footer>
            <Container className='footerContainer'>
                <Row>
                    <Col className = 'col-12'>
                        <h6 className='footerh6 py-3'>D-Prime Watches</h6>
                    </Col>
                </Row>
                <Row>
                    <Col className = "col-6 col-lg-4 column">
                        <div>
                            <p>Contact</p>
                            <div className='contact'>
                                <div>Street : No 7 factory road</div>
                                <div>City: Aba</div>
                                <div>State : Abia State</div>
                                <div>Zip Code : 35068</div>
                                <div>Phone Number : 080-61100328</div>
                                <div>Mobile Number : 080-12345678</div>
                            </div>
                        </div>
                    </Col>
                    <Col className = "col-6 col-lg-4 column">
                        <div>
                            <p>Menu</p>
                            <div>
                                <div><Link className='menu' to='/'>Home</Link></div>
                                <div><Link className='menu' to='/'>About Us</Link></div>
                                <div><Link className='menu' to='/'>Contact Us</Link></div>
                                <div><Link className='menu' to='/'>Sign-In</Link></div>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-12 col-lg-4 py-5 py-lg-0 column">
                        <div>
                            <p>NewsLetter</p>
                            <div>
                                <InputGroup className="my-2" size='sm'>
                                    <Form.Control
                                    onChange={handleEmail}
                                    type='email'
                                    value={email}
                                    placeholder="Enter a valid email"
                                    aria-label='Small'
                                    aria-describedby="inputGroup-sizing-sm"
                                    />
                                    <Button size='sm' className='black' variant="outline-secondary" onClick={handleButton} >
                                        Enter
                                    </Button>
                                </InputGroup>
                            </div>
                            <div>
                                <a href='javascript:void(0)'><img src ={img1} alt = 'pinintrest' className='image'/></a>
                                <a href='javascript:void(0)'><img src ={img2} alt = 'linkedIn' className='image'/></a>
                                <a href='javascript:void(0)'><img src ={img3} alt = 'instagram' className='image'/></a>
                                <a href='javascript:void(0)'><img src ={img4} alt = 'twitter' className='image'/></a>
                                <a href='javascript:void(0)'><img src ={img5} alt = 'facebook' className='image'/></a>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='top-footer'>
                    <Col className='col-12 text-center menu my-1'>
                        Copright 2023 D-prime Nigeria Inc. All rights reserved.  
                    </Col>
                </Row>
                      
            </Container>
        </footer>
    );
}

export default Footer;