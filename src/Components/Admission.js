import React from 'react';
import Header from './Header';
import Footer from './Footer/Footer';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { FloatingLabel } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

function Admission() {
    return (
        <div>
            <Header/>
            <Container>
                <div style={{backgroundColor:'gray',height:'800px', borderRadius:'25px',marginTop:'30px'}}>
            <img style={{marginLeft:'200px'}}src="/Images/admission.PNG" alt="admission" />
                <Form style={{width:'50%', marginLeft:'260px',marginTop:'60px'}}>
                   
                       <Form.Control style={{marginTop:'20px'}} placeholder="Name" />
                       <Form.Control style={{marginTop:'20px'}} placeholder="Email" type="email" />
                       <Form.Control style={{marginTop:'20px'}} placeholder="Phone Number" type="Number" />
                       <Form.Select style={{marginTop:'20px'}}>
                     <option>Admission Enquiry For</option>
                     <option value="1">Nursery</option>
                     <option value="2">KG</option>
                     <option value="3">First</option>
                     <option value="4">Second</option>
                     <option value="5">Third</option>
                     <option value="6">Fourth</option>
                     <option value="7">Fifth</option>
                     <option value="8">Sixth</option>
                     <option value="9">Seventh</option>
                     <option value="10">Eighth</option>
                     <option value="11">Ninth</option>
                     <option value="12">Tenth</option>
                     <option value="13">Eleven</option>
                     <option value="14">Twelve</option>
                       </Form.Select>
                       <FloatingLabel controlId="floatingTextarea" label="Address:" style={{marginTop:'20px'}}>
                      <Form.Control
                              as="textarea"
                           placeholder="Address"
                         style={{ height: '100px' }}
                                />
                           </FloatingLabel>
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

export default Admission;
