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
                <div style={{backgroundColor:'#fefefe',height:'950px', borderRadius:'25px',marginTop:'30px',width:'80%',margin:'auto'}}>
                    <img style={{ margin: 'auto', width: '100%' }} src="https://firebasestorage.googleapis.com/v0/b/motherteresa-d7f08.appspot.com/o/assets%2Fcareer.png?alt=media&token=a23c30cf-dca1-4098-9115-c59fa9d53fe2" alt="career" />
                <Form style={{width:'50%', marginLeft:'260px',marginTop:'60px',fontSize:'20px',fontWeight:'500'}}>
                    <Form.Select style={{marginTop:'20px',height:'50px',borderWidth:'4px'}}>
                     <option>Post Apply For</option>
                     <option value="1">Faculty</option>
                     <option value="2">Administration</option>
                     <option value="3">Non-Teaching</option>
                     <option value="4">Clerk</option>
                       </Form.Select>
                       <Form.Control style={{marginTop:'20px',height:'50px',borderWidth:'4px'}} placeholder="Name" />
                       <Form.Control style={{marginTop:'20px',height:'50px',borderWidth:'4px'}} placeholder="Email" type="email" />
                       <Form.Control style={{marginTop:'20px',height:'50px',borderWidth:'4px'}} placeholder="Phone Number" type="Number" />
                       <Form.Control style={{marginTop:'20px',height:'50px',borderWidth:'4px'}} placeholder="Job Profile" />
                       <Form.Group controlId="formFile" className="mb-3" style={{marginTop:'20px',height:'70px'}} >
                    <Form.Label >Upload Resume</Form.Label>
                          <Form.Control type="file" style={{height:'50px',borderWidth:'4px'}}/>
                           </Form.Group>
                           <Button variant="primary" type="submit" style={{marginTop:'30px',marginLeft:'160px',height:'40px',width:'180px',borderRadius:'25px'}}>
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
