import { Container, InputGroup, Form, Button, Row } from 'react-bootstrap';
import { useState } from 'react';
import { DateTime } from "luxon";
import cloud from './image/cloud-removebg-preview.png'

import './Home.css';


function Home(props){
    const [searchValue, setSearchValue] = useState('');
    

    const handleSearchValue = (e) =>  setSearchValue(e.target.value);

    const handleSearch = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&APPID=878e948fa57edd68ec892de675aea020`)
        .then(res => res.json())
        .then((data) => {
            if (data.message === 'city not found'){
                alert ('City not found. Please check your spelling');
            }else{
                props.setSearchData(data);
            }
        })
        .catch((err) => console.log(err))

        setSearchValue('');
    }



    return (
        <>
            <Container fluid className='px-0'>
                <div className='flexCenter align-items-center bg-info' style={{height: '100vh'}}>
                    <Row style={{width: '80%', height: '80vh', color: 'white'}}>
                        <div className='leftSection d-none d-lg-block px-0 col-12 col-lg-6'>
                            <div className='black'>
                                <div className='flexCenter' style={{height: '80%'}}>
                                    <div className='text-center'>
                                        <div>
                                            <img style={{width: '12rem'}} src={cloud} alt='clouds' />
                                        </div>
                                        <div>
                                            <div style={{fontSize: '4rem'}}>{props.searchData.name} {props.searchData.sys.country}</div>
                                        </div>
                                        <div className='mt-3'>
                                            <h3>{props.searchData.weather[0].description}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className='flexBetween' >
                                    <div className='d-flex align-items-center' style={{fontSize: '1.5rem'}}>
                                        {DateTime.now().toLocaleString(DateTime.DATETIME_MED)}
                                    </div>
                                    <div style={{fontSize: '5rem'}}>
                                        {Math.round(props.searchData.main.temp - 273.15)}&#8451; 
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='rightSection col-12 col-lg-6 px-0'>
                            <div className='black'>
                                <div className='text-center'>
                                    <h3>Weather App</h3>
                                </div>
                                <div className='mb-5 mt-4'>
                                    <InputGroup className="">
                                        <Form.Control
                                        onChange={handleSearchValue}
                                        value={searchValue}
                                        type='text'
                                        style={{fontSize: '1.4rem'}}
                                        placeholder="Search for a city"
                                        aria-label="search city"
                                        aria-describedby="basic-addon2"
                                        />
                                        <Button variant="primary" onClick={handleSearch} id="button-addon2">
                                        Search
                                        </Button>
                                    </InputGroup>
                                </div>
                                <div className='text-center'>
                                    <h3>{props.searchData.name} {props.searchData.sys.country}</h3>
                                </div>
                                <hr />
                                <div className='flexBetween'>
                                    <h5>Temperature</h5>
                                    <h5>{Math.round(props.searchData.main.temp - 273.15)} &#8451;</h5>
                                </div>
                                <hr />
                                <div className='flexBetween'>
                                    <h5>Humidity</h5>
                                    <h5>{props.searchData.main.humidity} %</h5>
                                </div>
                                <hr />
                                <div className='flexBetween'>
                                    <h5>Visibility</h5>
                                    <h5>{props.searchData.visibility} m</h5>
                                </div>
                                <hr />
                                <div className='flexBetween'>
                                    <h5>Wind Speed</h5>
                                    <h5>{(props.searchData.wind.speed.toFixed(1))} Km/hr</h5>
                                </div>
                                
                            </div>
                        </div>
                    </Row>
                </div>

            </Container>

        </>
    )
}

export default Home;