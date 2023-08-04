import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import NavbarComponent from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Cart.css';
import { useContext, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../MyContext";

function Cart(){
    const {badgeNumber, setBadgeNumber} = useContext(MyContext);
    const {cartArray, setCartArray} = useContext(MyContext);
    const [totalPrice, setTotalPrice] = useState(0);

    const navigate = useNavigate();


    useMemo(() => {
        let totalSum = 0;
        let qty = 0;
        cartArray.forEach((item) => {
            totalSum += item.price;
            qty += item.count;
            setTotalPrice(totalSum);
            setBadgeNumber(qty);
        })

    }, [cartArray, setBadgeNumber])


    const handleIncrease = (item) => {
        const increaseCount = cartArray.map((cartItem) => {
            if (cartItem.id === item.id){
                return {...cartItem, count: cartItem.count + 1, price: (cartItem.price + cartItem.initialPrice)};
            }
            return cartItem;
        })
        setCartArray(increaseCount);
    }


    const handleDecrease = (item) => {
        const decreaseCount = cartArray.map((cartItem) => {
            if (cartItem.id === item.id){
                return {...cartItem, count: cartItem.count - 1, price: (cartItem.price - cartItem.initialPrice)};
            }
            return cartItem;
        })
        setCartArray(decreaseCount);
    }


    const handleDelete = (item) => {
        const updatedCartItems = cartArray.filter((cartArray) => cartArray.id !== item.id);
        setCartArray(updatedCartItems);
    };


    const handleCheckOut = () => {
        setCartArray([]);
        setBadgeNumber(0);
        navigate('/');
    }



    return <>
            <NavbarComponent />
            <Container>
                <Row>
                    <div className='col-12 py-2 text-center' style={{backgroundColor: '#e6eb58'}}>
                        <h4>D-Prime Watches</h4>
                    </div>
                </Row>
                <Row className="cartContainer py-3">
                    <Col className="col-12 col-lg-9">
                        <div className="cart rounded-1 px-4 pb-3">
                            <div className="border-grey py-3">Cart ({badgeNumber})</div>
                            {cartArray.map((item) => {
                                return (
                                <div key={item.id} className="cart-loop mb-2 mt-3">
                                    <div className="d-flex">
                                        <div className="col-2 me-2 me-lg-0">
                                            <img src={item.img} className="img-fluid rounded-1 bg-danger" alt="product-img" style={{width: '4rem', height: '70px'}} />
                                        </div>
                                        <div className="col">
                                            <h6>{item.name}</h6>
                                            <div>D-prime Watches</div>
                                            <div>In Stock</div>
                                        </div>
                                        <div className="col-2 d-flex justify-content-center align-items-center">
                                            <div>
                                                <h6>₦ {item.price}</h6>
                                                <h6>Qty: {item.count}</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-grey d-flex justify-content-between pb-2 mt-2">
                                        <div>
                                            <Button onClick={() => handleDelete(item)}>Remove Item</Button>
                                        </div>
                                        <div>
                                            <ButtonGroup>
                                                    <Button onClick={() => handleDecrease(item)}>-</Button>
                                                    <Button variant="outline-primary">{item.count}</Button>
                                                    <Button onClick={() => handleIncrease(item)}>+</Button>
                                            </ButtonGroup>
                                        </div>
                                    </div>
                                </div>)
                            })}
                        </div>
                    </Col>
                    <Col className="col-12 col-lg-3 mt-4 mt-lg-0">
                        <div className="cart p-2 rounded-1">
                            <h6 className="border-grey py-2">CART SUMMARY</h6>
                            <div className="border-grey d-flex justify-content-between py-2">
                                <h6>TOTAL</h6>
                                <h6>₦ {totalPrice}</h6>
                            </div>
                            <div className="mt-3">
                                <Button onClick={handleCheckOut} style={{width: '100%'}}>CHECKOUT(₦ {totalPrice})</Button>
                            </div>
                        </div>
                        <div className="cart p-2 rounded-1 mt-2">
                            <h6 className="border-grey pb-2">Returns are easy</h6>
                            <div className="small">Free return within 15 days for Official Store items</div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
}

export default Cart;