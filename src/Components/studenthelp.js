import React from 'react';
import Header from './Header';
import Footer from './Footer/Footer';
import {Form} from 'react-bootstrap';

import{Button} from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

function studenthelp() {
    return (
        <div>
             <Header/>
            <Container>
                <div style={{backgroundColor:'#7791a1',height:'1300px', borderRadius:'25px',marginTop:'30px'}}>

                <h1 style={{color: 'rgb(2, 2, 48)', fontWeight: '900',fontSize: '80px', marginLeft:'310px'}}> Student HelpDesk: </h1>
                   
                <Form style={{width:'70%', marginLeft:'220px',marginTop:'60px',fontSize:'20px',fontWeight:'500'}}>
               
  <Row className="mb-3">
    <Form.Group as={Col} >
      <Form.Label>Student Name*</Form.Label>
      <Form.Control type="text" placeholder="Enter your Name" style={{height:'60px'}} />
    </Form.Group>

    <Form.Group as={Col} >
      <Form.Label>Father;s Name*</Form.Label>
      <Form.Control type="text" placeholder="Father's Name" style={{height:'60px'}} />
    </Form.Group>
  </Row>
  
 
  <Row className="mb-3">
    <Form.Group as={Col} >
    <Form.Label>Class*</Form.Label>
      <Form.Select defaultValue="Choose..." style={{height:'60px'}}>
        <option>Single</option>
        <option>Married</option>
        <option>Others</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} >
    <Form.Label>Section*</Form.Label>
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
      <Form.Label>Roll Number*</Form.Label>
      <Form.Control type="number" placeholder="Roll Number" style={{height:'60px'}} />
    </Form.Group>

    <Form.Group as={Col} >
      <Form.Label>Contact Number*</Form.Label>
      <Form.Control type="Number" placeholder="Contact Numberr" style={{height:'60px'}} />
    </Form.Group>
  </Row>
  <Row className="mb-3">
    <Form.Group as={Col} >
      <Form.Label>Email:</Form.Label>
      <Form.Control type="email" placeholder="Enter your Email" style={{height:'60px'}} />
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
    <Form.Label>Please Select from the following, Where you need help (you can tick more than one box)</Form.Label>
    <Form.Check type="checkbox" label="Extra class for any particular topic" />
    <Form.Check type="checkbox" label=" Missing username and password for educomp" />
    <Form.Check type="checkbox" label="Change in phone no./Email or any other details" />
    <Form.Check type="checkbox" label="Missing book or notebook" />
    <Form.Check type="checkbox" label="Educomp problem in class" />
    <Form.Check type="checkbox" label="Any Othert" />
    </Form.Group>
    </Row>
    <Form.Group as={Col} >
    <Form.Label>Provide details of any Issue*</Form.Label>
    <Form.Control as="textarea" rows={3}  />
    </Form.Group>


 
                       
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

export default studenthelp;
