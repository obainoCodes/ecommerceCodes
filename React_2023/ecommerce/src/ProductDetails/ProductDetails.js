import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import NavbarComponent from "../Navbar/Navbar";
import { useState, useContext, useMemo } from "react";
import Footer from "../Footer/Footer";
import { MyContext } from "../MyContext";
import { useLocation } from "react-router-dom";


function ProductDetails(){
    const {badgeNumber, setBadgeNumber} = useContext(MyContext);
    const {productData, setProductData} = useContext(MyContext);
    const {cartArray, setCartArray} = useContext(MyContext);
    const [productCounter, setProductCounter] = useState(1);
    const [dataId, setDataId] = useState('');
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productImage, setProductImage] = useState('');
    const [productDescription, setProductDesciption] = useState('');
    const [initialPrice, setInitialPrice] = useState(0);


   
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    let num = params.get('id');
    num = parseInt(num, 10);

    useMemo(() => {
        productData.map((item) => {
            if (num === item.id){
                setDataId(item.id);
                setProductName(item.productName);
                setProductPrice(item.productPrice);
                setProductImage(item.productImage);
                setProductDesciption(item.productDescription);
                setInitialPrice(item.productPrice);
            }
        })
    }, [num, productData])



    const handleIncrease = () => {
        setProductCounter((c) => {
            return c+1;
        });
        setProductPrice(() => {
            return (productPrice + initialPrice);
        });
    }


    const handleDecrease = () => {
        if (productCounter === 1){
            return 1;           // The productCounter should not decrease beyond one.
        }else{
            setProductCounter((c) => {
                return c-1;
            })
        }
        setProductPrice(() => {
            return (productPrice - initialPrice);
        });
    }

    // function that adds items to cart
    const handleAddToCart = () => {
        setBadgeNumber(badgeNumber + productCounter);
        let itemDetails = {
            id : dataId,
            img : productImage,
            name : productName,
            price : productPrice,
            count : productCounter,
            initialPrice
        }

        setCartArray((cartArray) => [...cartArray, itemDetails]);
        setProductCounter(1);
    }

    



    return <>
            <NavbarComponent />
            <Container>
                <Row>
                    <div className='col-12 py-2 text-center' style={{backgroundColor: '#e6eb58'}}>
                        <h4>D-Prime Watches</h4>
                    </div>
                </Row>
                <Row>
                    <Col className="p-4 col-12 col-lg-7">
                        <div className="productImgHolder">
                            <img className="img-fluid" style={{width: '100%', height: '27rem'}} src={productImage} alt="productImage" />
                        </div>
                    </Col>
                    <Col className="p-3 col-12 col-lg-5">
                        <div>
                            <h4>{productName}</h4>
                            <div className="mt-3" style={{height: '10rem'}}>{productDescription}</div>
                            <h5 className="mb-0">Price:</h5>
                            <h4 className="">₦ {productPrice}</h4>
                            <div className="mt-3">
                                <ButtonGroup>
                                    <Button onClick={handleDecrease}>-</Button>
                                    <Button variant="outline-primary">{productCounter}</Button>
                                    <Button onClick={handleIncrease}>+</Button>
                                </ButtonGroup>
                            </div>
                            <div className="mt-3">
                                <Button onClick={handleAddToCart}>Add Item To Cart</Button>
                            </div>
                        </div> 
                    </Col>
                </Row>

            </Container>
            <Footer />
        </>
}

export default ProductDetails;