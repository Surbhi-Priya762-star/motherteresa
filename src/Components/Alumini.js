import React from 'react';
import Header from './Header';
import Footer from './Footer/Footer';
import {Form} from 'react-bootstrap';
import { Button, Row, Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

function Alumini() {
    return (
        <div>
            <Header/>
            <Container>
                <div style={{backgroundColor:'gray',height:'1600px', borderRadius:'25px',marginTop:'30px'}}>
            <img style={{marginLeft:'200px'}}src="/Images/alumini.PNG" alt="career" />
                <Form style={{width:'70%', marginLeft:'220px',marginTop:'60px',fontSize:'20px',fontWeight:'500'}}>
               
  <Row className="mb-3">
    <Form.Group as={Col} >
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" placeholder="Enter your Name" style={{height:'60px'}} />
    </Form.Group>

    <Form.Group as={Col} >
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Your Email Id" style={{height:'60px'}} />
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} >
      <Form.Label>Contact Number</Form.Label>
      <Form.Control type="phoneNumber" placeholder="Contact Number" style={{height:'60px'}} />
    </Form.Group>

    <Form.Group as={Col} >
      <Form.Label>Batch Passout Year*</Form.Label>
      <Form.Control type="Number" placeholder="Passout Year" style={{height:'60px'}} />
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} >
      <Form.Label>Date of Birth</Form.Label>
      <Form.Control type="Number" placeholder="mm/dd/yyyy" style={{height:'60px'}} />
    </Form.Group>

    <Form.Group as={Col} >
    <Form.Label>Gender</Form.Label>
      <Form.Select defaultValue="Choose..." style={{height:'60px'}}>
        <option>Male</option>
        <option>Female</option>
        <option>Others</option>
      </Form.Select>
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} >
    <Form.Label>Marital Status</Form.Label>
      <Form.Select defaultValue="Choose..." style={{height:'60px'}}>
        <option>Single</option>
        <option>Married</option>
        <option>Others</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} >
    <Form.Label>Current Status</Form.Label>
      <Form.Select defaultValue="Choose..." style={{height:'60px'}}>
        <option>Working</option>
        <option>Business</option>
        <option>HomeMaker</option>
        <option>Studying</option>
      </Form.Select>
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} >
      <Form.Label>Organization</Form.Label>
      <Form.Control type="text" placeholder="organization" style={{height:'60px'}} />
    </Form.Group>

    <Form.Group as={Col} >
      <Form.Label>Designation</Form.Label>
      <Form.Control type="text" placeholder="Designation" style={{height:'60px'}} />
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} >
      <Form.Label>City</Form.Label>
      <Form.Control type="text" placeholder="City" style={{height:'60px'}} />
    </Form.Group>

    <Form.Group as={Col} >
      <Form.Label>State</Form.Label>
      <Form.Control type="text" placeholder="State" style={{height:'60px'}} />
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} >
      <Form.Label>Country</Form.Label>
      <Form.Control type="text" placeholder="Country" style={{height:'60px'}} />
    </Form.Group>
</Row>
<Row className="mb-3">
    <Form.Group as={Col} >
    <Form.Label>Address</Form.Label>
    <Form.Control as="textarea" rows={3}  />
    </Form.Group>

    <Form.Group as={Col} >
    <Form.Label>Message*</Form.Label>
    <Form.Control as="textarea" rows={3}  />
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} >
    <Form.Label>You are a</Form.Label>
      <Form.Select defaultValue="Choose..." style={{height:'60px'}} >
        <option>Student</option>
        <option>Parents</option>
        <option>Visitor</option>
        <option>Others</option>
      </Form.Select>
    </Form.Group>
 </Row>
                       
  <Button variant="primary" type="submit" style={{marginTop:'30px',marginLeft:'310px',height:'60px',width:'120px'}}>
                                   Submit
                                     </Button>                  
                       
                       
                       
                       
                       
                       
                       
                         </Form>



            </div>
            
            </Container>
         
          
          
          
          
            <Footer/>
        </div>
    )
}

export default Alumini
