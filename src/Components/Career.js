import React from 'react';
import Header from './Header';
import Footer from './Footer/Footer';
import {Form} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

function Career() {
    return (
        <div>
            <Header/>
            <Container>
                <div style={{backgroundColor:'gray',height:'800px', borderRadius:'25px',marginTop:'30px'}}>
            <img style={{marginLeft:'200px'}}src="/Images/career.PNG" alt="career" />
                <Form style={{width:'50%', marginLeft:'260px',marginTop:'60px'}}>
                    <Form.Select>
                     <option>Post Apply For</option>
                     <option value="1">Faculty</option>
                     <option value="2">Administration</option>
                     <option value="3">Non-Teaching</option>
                     <option value="4">Clerk</option>
                       </Form.Select>
                       <Form.Control style={{marginTop:'20px'}} placeholder="Name" />
                       <Form.Control style={{marginTop:'20px'}} placeholder="Email" type="email" />
                       <Form.Control style={{marginTop:'20px'}} placeholder="Phone Number" type="Number" />
                       <Form.Control style={{marginTop:'20px'}} placeholder="Job Profile" />
                       <Form.Group controlId="formFile" className="mb-3" style={{marginTop:'20px'}} >
                    <Form.Label>Upload Resume</Form.Label>
                          <Form.Control type="file" />
                           </Form.Group>
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
