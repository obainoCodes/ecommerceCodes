import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import { useEffect, useContext } from 'react';
import './ProductSection.css';
import { Link } from 'react-router-dom';
import { MyContext } from '../MyContext';



function ProductSection(){
    const {productData, setProductData} = useContext(MyContext);

    useEffect(() => {
    fetch('/shopEcommerce.json')
    .then((res) => res.json())
    .then((data) => {
        setProductData(data);
    })
    .catch((err) => console.log("error" + err));
    }, [setProductData])
        

    
    // function to show all products
    const handleAllProduct = () => {
        fetch('/shopEcommerce.json')
        .then((res) => res.json())
        .then((data) => {
            setProductData(data);
        })
        .catch((err) => console.log("error" + err));
    }

    // function to display products below ₦5000
    const handleBelow5k = () => {
        setProductData([]);
        fetch('/shopEcommerce.json')
        .then((res) => res.json())
        .then((data) => {
            setProductData(data.filter((item) => item.productPrice < 5000));
        })
        .catch((err) => console.log("error" + err));
    }

    // function to display products from ₦5000 to ₦9999
    const handleAbove5k = () => {
        setProductData([]);
        fetch('/shopEcommerce.json')
        .then((res) => res.json())
        .then((data) => {
            setProductData(data.filter((item) => (item.productPrice >= 5000 && item.productPrice < 10000)))
        })
        .catch((err) => console.log("error" + err));
    }

    // function to display products above ₦9999
    const handleAbove10k = () => {
        setProductData([]);
        fetch('/shopEcommerce.json')
        .then((res) => res.json())
        .then((data) => {
            setProductData(data.filter((item) => item.productPrice >= 10000))
        })
        .catch((err) => console.log("error" + err));
    }



    return (
        <>
            <Container>
                <Row className="productDiv">
                    <Col className='col-12 col-lg-6'>
                        <h4>WristWatches For You!</h4>
                    </Col>
                    <Col className='d-flex col-12 col-lg-6 justify-content-lg-end'>
                        <div className='me-2'>
                            <Button onClick={handleAllProduct}>Show All</Button>
                        </div>
                        <div>
                            <DropdownButton id="dropdown-basic-button" title="Sort By Prices">
                                <Dropdown.Item onClick={handleBelow5k}>₦0 - ₦4999</Dropdown.Item>
                                <Dropdown.Item onClick={handleAbove5k}>₦5000 - ₦9999</Dropdown.Item>
                                <Dropdown.Item onClick={handleAbove10k}>₦10000 and above</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </Col>
                </Row>
                
                <Row className='justify-content-around pb-3 productSectionLoop' style={{minHeight: '10rem'}}>
                    {productData.map((data, index) => {
                        return  <Link className='col-6 col-md-4 col-lg-3 mb-3 textNone' key={data.id} to={`/productDetails?id=${data.id}`}>
                                    <Card key={index}>
                                        <Card.Img variant="top" className='img-fluid' src={data.productImage} style={{height: '12rem'}}/>
                                        <Card.Body>
                                            <Card.Title style={{height: '8rem'}}>{data.productName}</Card.Title>
                                            <div className='text-truncate'>
                                                {data.productDescription} 
                                            </div>
                                            <div className='cardPrice'>₦ {data.productPrice}</div>
                                        </Card.Body>
                                    </Card>
                                </Link>
                    })}

                </Row>
            </Container>
        </>
    )
}

export default ProductSection;