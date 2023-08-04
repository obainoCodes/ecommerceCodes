import { Container, Button, Form, Row } from "react-bootstrap";
import { useState, useContext } from "react";
import NavbarComponent from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import pic from './hero_img.png';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../MyContext";



function SignUp(){
    const {emailArray, setEmailArray} = useContext(MyContext)
    const [signUpNameValue, setSiginNameValue] = useState('');
    const [signUpEmailValue, setSiginEmailValue] = useState('');
    const [signUpPasswordValue, setSiginPasswordValue] = useState('');
    const navigate = useNavigate();

    const handleNameValue = (e) => {
        setSiginNameValue(e.target.value);
    }

    const handleEmailValue = (e) => {
        setSiginEmailValue(e.target.value);
    }

    const handlePasswordValue = (e) => {
        setSiginPasswordValue(e.target.value);
    }

    const handleSignUpForm = (e) => {
        e.preventDefault();
        let arr = {
            "name" : signUpNameValue,
            "email" : signUpEmailValue,
            "password" : signUpPasswordValue
        }

        setEmailArray((emailArray) => [...emailArray, arr]);

        setSiginNameValue('');
        setSiginEmailValue('');
        setSiginPasswordValue('');

        
        setTimeout(() => {
            navigate("/sign-in"); 
        }, 1000)

    }



    return <>
            <NavbarComponent />
            <Container>
                <Row>
                    <div className='col-12 py-2 text-center' style={{backgroundColor: '#e6eb58'}}>
                        <h4>D-Prime Watches</h4>
                    </div>
                </Row>
                <Row className="justify-content-center align-items-center" style={{height: '100vh', backgroundColor: '#e6ecf2'}}>
                    <div className="col-12 col-lg-6 d-none d-lg-block">
                        <img className="bg-danger image-fluid" style={{width: '100%'}} src={pic} alt="signInPics" />
                    </div>
                    <div className="col-8 col-lg-4">
                        <h5 className="text-center mb-3">Sign-Up to D-Prime Watches</h5>

                        <Form onSubmit={handleSignUpForm}>
                            <div>
                                <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                aria-label="text"
                                value={signUpNameValue}
                                onChange={handleNameValue}
                                required
                                />
                            </div>
                            <div>
                                <Form.Control
                                className="my-3"
                                type="email"
                                placeholder="Enter your email"
                                aria-label="email"
                                value={signUpEmailValue}
                                onChange={handleEmailValue}
                                required
                                />
                            </div>
                            <div>
                                <Form.Control
                                type="password"
                                placeholder="Enter your password"
                                aria-label="password"
                                value={signUpPasswordValue}
                                onChange={handlePasswordValue}
                                required
                                />
                            </div>
                            <div>
                                <Button type="submit" className="py-2 my-3" style={{width: '100%'}}>Sign Up</Button>
                            </div>
                        </Form>
                        <p>Already have an account? <Link to='/sign-in'>Sign-in</Link></p> 
                        <div className="text-center">
                            <h6>D-Prime Watches</h6>
                        </div>
                    </div>
                </Row>
            </Container>
            <Footer />
        </>
}

export default SignUp;