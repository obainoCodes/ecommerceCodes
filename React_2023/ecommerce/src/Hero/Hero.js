import Container from "react-bootstrap/esm/Container";
import {Row, Col} from "react-bootstrap";
import { useContext } from 'react';
import pics from "./hero_img.png";
import "./Hero.css";
import { MyContext } from "../MyContext";

function Hero() {
    const {userName, setUserName} = useContext(MyContext)

    return (
        <Container>
            <Row>
                <Col className='col-12 heroTop d-flex justify-content-between'>
                    <h4>D-Prime Collections</h4><h4>{userName}</h4>
                </Col>
            </Row>
            <Row className="heroDiv">
                <Col className="col-12 col-lg-6">
                    <div className="heroData">
                        Grab Upto 50% Discount On Your Favourite Wrist Watches. Hurry While Offer Last.
                    </div>
                </Col>
                <Col className="col-12 col-lg-6">
                    <div className="imgDiv">
                        <img className="imgPics" src={pics} alt="product-pics" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Hero;