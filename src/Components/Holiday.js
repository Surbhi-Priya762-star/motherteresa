import React from 'react';
import Header from './Header';
import Footer from './Footer/Footer';
import { Container } from 'react-bootstrap';

function Holiday() {
    return (
        <div>
            <Header/>
            <Container>
                <div style={{backgroundColor:'#7791a1',height:'900px', borderRadius:'25px',marginTop:'30px'}}>

                <h1 style={{color: 'rgb(2, 2, 48)', fontWeight: '900',fontSize: '80px', marginLeft:'350px'}}> Holiday </h1>
                </div>
                </Container>
                <Footer/>
        </div>
    )
}

export default Holiday;
