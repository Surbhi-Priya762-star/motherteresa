import React from 'react';
import Header from './Header';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from './Footer/Footer';

function Updates() {
    return (
        <div>
            <Header/>
            <Container>
                <div style={{backgroundColor:'#7791a1',height:'1300px', borderRadius:'45px',marginTop:'30px',width:'1400px'}}>


<Row>
<h1 style={{color: 'rgb(2, 2, 48)', fontWeight: '900',fontSize: '80px', marginLeft:'480px'}}> UPDATES:- </h1>
    <Col xs={6}>
                <img style={{marginLeft:'160px',height:'400px',width:'400px',marginTop:'50px'}}src="/Images/schoolactivity.PNG" alt="career" />
                <h3 style={{color: 'rgb(2, 2, 48)', fontWeight: '900',fontSize: '50px',marginLeft:'150px'}}> School Activities </h3>
                </Col>
                <Col xs={6}>
                <img style={{marginLeft:'160px',height:'400px',width:'400px',marginTop:'50px'}}src="/Images/schoolholiday.PNG" alt="career" />
                <h3 style={{color: 'rgb(2, 2, 48)', fontWeight: '900',fontSize: '50px',marginLeft:'150px'}}> School Holiday </h3>
                </Col>
                <Col xs={6}>
                <img style={{marginLeft:'160px',height:'400px',width:'400px',marginTop:'50px'}}src="/Images/Syllabus.jpg" alt="career" />
                <h3 style={{color: 'rgb(2, 2, 48)', fontWeight: '900',fontSize: '50px',marginLeft:'150px'}}>Syllabus </h3>
                </Col>
                <Col xs={6}>
                <img style={{marginLeft:'160px',height:'400px',width:'400px',marginTop:'50px'}}src="/Images/welcome school.PNG" alt="career" />
                <h3 style={{color: 'rgb(2, 2, 48)', fontWeight: '900',fontSize: '50px',marginLeft:'150px'}}> Welcome To School </h3>
</Col>








</Row>


</div>
</Container>

            <Footer/>
            
        </div>
    )
}

export default Updates
