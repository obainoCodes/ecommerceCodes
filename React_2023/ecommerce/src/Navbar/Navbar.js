import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';
import logo from './image/logo3.png';
import { useState, useContext } from 'react';
import { MyContext } from '../MyContext';
import "./Navbar.css";
import { useNavigate, NavLink } from 'react-router-dom';

function NavbarComponent() {
  const {badgeNumber, setBadgeNumber} = useContext(MyContext);
  const {productData, setProductData} = useContext(MyContext);
  const {login, setLogin} = useContext(MyContext);
  const {userName, setUserName} = useContext(MyContext);
  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  }

  const handleSearchProduct = () => {
    setProductData(productData.filter((item) => {
      return item.productName.split(" ").includes(searchValue);
    }))

    setSearchValue('');

  }

  const handleLogout = () => {
    setLogin('Sign-in');
    setUserName('');
    navigate('/sign-in');
  }



  return (
    
      <Container className='navbarContainer ps-3'>
        <div className='row py-2 justify-content-between'>
          
          <div className='col-12 col-md-6 col-lg-3 d-flex justify-content-center d-md-block'>
              <img style={{width: '6rem', height: '2.5rem'}} src={logo} alt='logo' />
          </div>

          <div className='col-12 col-md-6 col-lg-5 py-3 py-md-0 order-lg-2 navbarLink'>
              <NavLink className={({isActive}) => (isActive ? 'active' : 'notActive')} to='/'>Home</NavLink>
              <NavLink className={({isActive}) => (isActive ? 'active' : 'notActive')} to='/about'>About</NavLink>
              <NavLink className={({isActive}) => (isActive ? 'active' : 'notActive')} to='/contact'>Contact</NavLink>
              <NavLink className={({isActive}) => (isActive ? 'active' : 'notActive')} onClick={handleLogout} to='/sign-in'>{login}</NavLink>
              <NavLink className={({isActive}) => (isActive ? 'active cartLink' : 'notActive cartLink')} to='/cart' ><FontAwesomeIcon icon={faCartShopping} />Cart<Badge className='navbarBadge' bg="danger">{badgeNumber}</Badge></NavLink>
          </div>
          
          <div className='col-12 col-lg-4 order-lg-1'>
            <InputGroup>
              <Form.Control 
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchValue}
                onChange={handleSearchValue}
              />
              <Button onClick={handleSearchProduct}>Search</Button>
            </InputGroup>
          </div>
          
        </div>
      </Container>
  );
}

export default NavbarComponent;