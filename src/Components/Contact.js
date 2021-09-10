import React from 'react';
import Header from './Header';
import Footer from './Footer/Footer';
import {Form} from 'react-bootstrap';
import { FloatingLabel } from 'react-bootstrap';
import{Button} from 'react-bootstrap';
import { Container } from 'react-bootstrap';

function Career() {
    return (
        <div>
            <Header/>
            <Container>
                <div style={{backgroundColor:'#7791a1',height:'800px', borderRadius:'25px',marginTop:'30px'}}>
                    <div style={{marginLeft:'200px'}}>
               <h1 style={{color: 'rgb(2, 2, 48)', fontWeight: '900',fontSize: '50px'}}> Mother Teresa Modern Public School </h1>
               <h4 style={{color: '#260600', fontWeight: '900',fontSize: '30px', marginLeft:'150px'}}>(Affiliated to C.B.S.E., NEW DELHI)</h4>
                      <h5 style={{color: '#260600', fontWeight: '800',fontSize: '27px', marginLeft:'30px'}}> LADWA ROAD, MATHANA CHOWKI,  KURUKSHETRA -136131</h5>
                      <h5 style={{color: '#260600', fontWeight: '800',fontSize: '27px', marginLeft:'30px'}}> Email  us @ smtmps1999@gmail.com </h5>
                      <h5 style={{color: '#260600', fontWeight: '800',fontSize: '27px', marginLeft:'30px'}}> Website : www.motherteresapubschoolkur.com </h5>
                      <h5 style={{color: '#260600', fontWeight: '800',fontSize: '27px', marginLeft:'30px'}}> Call us @ 9466962572 , 9467699572 , 01744-282599 </h5>
               </div>
                <Form style={{width:'50%', marginLeft:'260px',marginTop:'60px'}}>
          
                       <Form.Control style={{marginTop:'20px'}} placeholder="Name" />
                       <Form.Control style={{marginTop:'20px'}} placeholder="Email" type="email" />
                       <Form.Control style={{marginTop:'20px'}} placeholder="Phone Number" type="Number" />
                       <Form.Control style={{marginTop:'20px'}} placeholder="Subject" />
                       <FloatingLabel controlId="floatingTextarea2" label="Message" style={{marginTop:'20px'}}>
                      <Form.Control
                              as="textarea"
                           placeholder="Message"
                         style={{ height: '100px' }}
                                />
                           </FloatingLabel>
                           <Button variant="primary" type="submit" style={{marginTop:'30px',marginLeft:'260px',height:'60px',width:'120px'}}>
                                   Submit
                                     </Button>
                         </Form>



            </div>
            
            </Container>
         
          
          
          
          
            <Footer/>
        </div>
    )
}

export default Career;
