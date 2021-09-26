import React from 'react';
import Header from './Header';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from './Footer/Footer';

function Updates() {
    return (
        <div>
            <Header/>
            <Container>
                <div style={{backgroundColor:'#7791a1',height:'1300px', borderRadius:'45px',marginTop:'30px',width:'1200px'}}>


<Row>
<h1 style={{color: 'rgb(2, 2, 48)', fontWeight: '900',fontSize: '80px', marginLeft:'340px'}}> UPDATES:- </h1>
    <Col xs={6}>
               <a href="/Activities"> <img style={{marginLeft:'60px',height:'400px',width:'400px',marginTop:'50px'}}src="/Images/schoolactivity.png" alt="career" /></a>
                <h3 style={{color: 'rgb(2, 2, 48)', fontWeight: '900',fontSize: '50px',marginLeft:'50px'}}> School Activities </h3>
                </Col>
                <Col xs={6}>
                            <a href="/Holiday">    <img style={{ marginLeft: '60px', height: '400px', width: '400px', marginTop: '50px' }} src="https://firebasestorage.googleapis.com/v0/b/motherteresa-d7f08.appspot.com/o/assets%2Fschoolholiday.png?alt=media&token=e8aea3c1-c2ae-455b-8b2a-46f6cdb039b2" alt="career" /></a>
                <h3 style={{color: 'rgb(2, 2, 48)', fontWeight: '900',fontSize: '50px',marginLeft:'50px'}}> School Holiday </h3>
                </Col>
                <Col xs={6}>
            <a href="/Syllabus">    <img style={{marginLeft:'60px',height:'400px',width:'400px',marginTop:'50px'}}src="/Images/Syllabus.jpg" alt="career" /></a>
                <h3 style={{color: 'rgb(2, 2, 48)', fontWeight: '900',fontSize: '50px',marginLeft:'130px'}}>Syllabus </h3>
                </Col>
                <Col xs={6}>
                <a href="/AboutUs">     <img style={{marginLeft:'60px',height:'400px',width:'400px',marginTop:'50px'}}src="/Images/welcome school.png" alt="career" /></a>
                <h3 style={{color: 'rgb(2, 2, 48)', fontWeight: '900',fontSize: '50px',marginLeft:'50px'}}> Welcome To School </h3>
</Col>








</Row>


</div>
</Container>

            <Footer/>
            
        </div>
    )
}

export default Updates
