import { Container, Button, Form, Row } from "react-bootstrap";
import facebook from './image/facebook-logo.svg';
import pic from './image/hero_img.png';
import { useState, useContext } from "react";
import NavbarComponent from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../MyContext";



function SignIn(){
    const {emailArray, setEmailArray} = useContext(MyContext);
    const {login, setLogin} = useContext(MyContext);
    const {userName, setUserName} = useContext(MyContext);
    const [signinEmailValue, setSiginEmailValue] = useState('');
    const [signinPasswordValue, setSiginPasswordValue] = useState('');

    const navigate = useNavigate();


    const handleEmailValue = (e) => {
        setSiginEmailValue(e.target.value);
    }

    const handlePasswordValue = (e) => {
        setSiginPasswordValue(e.target.value);
    }

    const handleVerifyData = () => {
        emailArray.map((obj) => {
            if ((obj.email === signinEmailValue) && (obj.password === signinPasswordValue)){
                navigate('/');
                setLogin('Logout');
                setUserName(`Welcome, ${obj.name}`);
            }else{
                alert('Sorry, your email or your password is incorrect')
            }
        })
        
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
                    <div className="d-none d-lg-block col-lg-6 me-3">
                        <img fluid className="bg-danger" style={{width: '100%'}} src={pic} alt="signInPics" />
                    </div>
                    <div className="col-8 col-lg-4">
                        <h5 className="text-center mb-3">Welcome to D-Prime Watches</h5>

                        <Form>
                            <div>
                                <Form.Control
                                className="mb-2"
                                type="email"
                                placeholder="Enter your email"
                                aria-label="email"
                                value={signinEmailValue}
                                onChange={handleEmailValue}
                                required
                                />
                            </div>
                            <div>
                                <Form.Control
                                type="password"
                                placeholder="Enter your password"
                                aria-label="password"
                                value={signinPasswordValue}
                                onChange={handlePasswordValue}
                                required
                                />
                            </div>
                            <div>
                                <Button onClick={handleVerifyData} className="my-3" style={{width: '100%'}}>Login</Button>
                            </div>
                        </Form>
                        <p>
                            Don't have an account? <Link to='/sign-up'>Sign-up</Link> now.
                        </p>
                        <p className="small">
                            For further support, you may contact our customer service team.
                        </p>
                        <p className="text-center">
                            <h6>D-Prime Watches</h6>
                        </p>
                    </div>
                </Row>
            </Container>
            <Footer />
        </>
}

export default SignIn;