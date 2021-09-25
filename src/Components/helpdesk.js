import React from 'react';
import Header from './Header';
import Footer from './Footer/Footer';
import {Row, Col} from 'react-bootstrap';

import { Container } from 'react-bootstrap';

function helpdesk() {
    return (
        <div>
           <Header/>
            <Container>
                <div style={{backgroundColor:'gray',height:'1300px', borderRadius:'25px',marginTop:'30px'}}>
            <img style={{width:'100%',height:'400px'}}src="/Images/helpdesk.png" alt="career" />
           
            <div style={{backgroundColor:'gray', border:'6px dotted black',marginTop:'10px'}}>  
           
            <Row>

    <Col xs={6}>
               <a href="/Contact"> <img style={{marginLeft:'160px',height:'400px',width:'400px',marginTop:'30px'}}src="/Images/contactus.png" alt="career" /></a>
                
                </Col>
                <Col xs={6}>
                <a href="/Feedback">  <img style={{marginLeft:'160px',height:'400px',width:'400px',marginTop:'30px'}}src="/Images/feedback.png" alt="career" /></a>
               
                </Col>
                <Col xs={6}>
                <a href="/studenthelp">   <img style={{marginLeft:'160px',height:'400px',width:'400px',marginTop:'30px'}}src="/Images/studenthelp.png" alt="career" /></a>
                
                </Col>
                <Col xs={6}>
                <a href="/Admission"><img style={{marginLeft:'160px',height:'400px',width:'400px',marginTop:'30px'}}src="/Images/admissioninquiry.png" alt="career" /></a>
                
</Col>








</Row>
</div>

            </div>
            
            </Container>
         
          
          
          
          
            <Footer/>




            
        </div>
    )
}

export default helpdesk
