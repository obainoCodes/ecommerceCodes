
import {Container,Row,Col} from 'react-bootstrap';
import watch from './about.avif';
import './About.css';
import NavbarComponent from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


function About(){
    

    return(
        <>
            <NavbarComponent />
            <Container className='aboutPage'>
                <Row>
                    <Col className='col-12 topCol'>
                        <h4>D-Prime Collections</h4>
                    </Col>
                </Row>
                <Row>
                    <Col className='col-12 col-lg-8 d-flex px-4 align-items-center'>
                        <div>
                            <h4 className='text-center'>OUR STORY</h4>
                            <div className='aboutText'>
                                In 2023, we started D-prime Collection to disrupt the overpriced
                                outdated models of the fashion industry. Empowered by the people through 
                                crowd funding,our original watch line set us apart by bringing you quality 
                                accesories at radically fair prices.Through social media we grew far beyond
                                our Nigerian home,becoming a global community of 1 million D-prime owners.
                                We are inspired by the go-getters,the innovators,the dreamers and our watches 
                                embody this very spirit.They are produced to give a person a feeling of self completion
                                without bias or doubt.
                            </div>
                            <div className='d-flex mt-4 justify-content-center'>
                                <div className='me-4'>
                                    <h5 className='text-center'>Kayboy </h5>
                                    <div>Co-founder-CSO</div>
                                </div>
                                <div>
                                    <h5 className='text-center'>Obaino </h5>
                                    <div>Co-founder-CEO</div>
                                </div>
                            </div>
                        </div>

                    </Col>
                    <Col className='d-none d-lg-block col-lg-4 d-flex justify-content-center'>
                        <img src = {watch} alt = 'about' className='watchImg'/>               
                    </Col>
                </Row>
                <Row className='px-3 mt-3'>
                    <Col className='col-12 col-lg-4 mt-3 mt-lg-0'>
                        <div className='text-center mb-3'>
                            <b>Exquisite in Design</b>
                        </div>
                        <p className='rowItalics'>
                            It possesses in general all the qualities of a priceless watch. 
                            It's tone depicts a natural flame of beauty with an appealing sight.
                        </p>
                    </Col>
                    <Col className='col-12 col-lg-4'>
                        <div className='text-center mb-3'>
                            <b>Confidence in Comfort</b>
                        </div>
                        <p className='rowItalics'>
                            Trying is believing.Give our watches a sense of doubt by trying it
                            for 30 days and if you are not amazed with its oultook and durability,
                            we'll take them back. 
                        </p>
                    </Col>
                    <Col className='col-12 col-lg-4'>
                        <div className='text-center mb-3'>
                            <b>Made from Nature</b>
                        </div>
                        <p className='rowItalics'>
                            The fashion industry dealing with hand accesories seem to forget a great deal 
                            of  natural materials that can improve the lustre of a hand accesory.We believe
                            it's time to change that.
                        </p>
                    </Col>
                </Row>
            </Container>
        <Footer />
        </>
    )
}

export default About;