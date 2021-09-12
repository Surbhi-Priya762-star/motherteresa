import React from 'react';
import Header from './Header';
import Footer from './Footer/Footer';
import {Form} from 'react-bootstrap';
import { FloatingLabel } from 'react-bootstrap';
import{Button} from 'react-bootstrap';
import { Container } from 'react-bootstrap';

function feedback() {
    return (
        <div>
             <Header/>
            <Container>
                <div style={{backgroundColor:'#7791a1',height:'900px', borderRadius:'25px',marginTop:'30px'}}>

                <h1 style={{color: 'rgb(2, 2, 48)', fontWeight: '900',fontSize: '80px', marginLeft:'350px'}}> Feedback </h1>
                   
                <Form style={{width:'50%', marginLeft:'260px',marginTop:'60px',fontSize:'20px',fontWeight:'500'}}>
                
          
                       <Form.Control style={{marginTop:'20px',height:'70px'}} placeholder="Name" />
                       <Form.Control style={{marginTop:'20px',height:'70px'}} placeholder="Email" type="email" />
                       <Form.Control style={{marginTop:'20px',height:'70px'}} placeholder="Phone Number" type="Number" />
                       <Form.Control style={{marginTop:'20px',height:'70px'}} placeholder="Subject" />
                       <FloatingLabel controlId="floatingTextarea2" label="Your Feedback" style={{marginTop:'20px'}}>
                      <Form.Control
                              as="textarea"
                           placeholder="Message"
                         style={{ height: '150px' }}
                                />
                           </FloatingLabel>
                           <Form.Select style={{marginTop:'20px',height:'70px'}}>
                     <option>You are a*</option>
                     <option value="1">Student</option>
                     <option value="2">Parent</option>
                     <option value="3">Visitors</option>
                     <option value="4">Others</option>
                       </Form.Select>
                           
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

export default feedback
