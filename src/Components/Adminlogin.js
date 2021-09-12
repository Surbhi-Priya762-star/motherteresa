import React from 'react';
import { Form, Button, Container} from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer/Footer';

function Adminlogin() {
    return (
        <div>
            <Header/>
            <Container>
                <div style={{backgroundColor:'gray',height:'600px', borderRadius:'25px',marginTop:'30px'}}>
            <img style={{marginLeft:'430px'}}src="/Images/mothere teresa logo.PNG" alt="career" />
            <Form style={{width:'50%', marginLeft:'260px',marginTop:'60px',fontSize:'20px',fontWeight:'500'}}>
          <Form.Control style={{marginTop:'20px',height:'70px'}} placeholder="User Name" />
          <Form.Control style={{marginTop:'20px',height:'70px'}} placeholder="Password" type="Password" />
    <Button variant="primary" type="submit" style={{marginTop:'30px',marginLeft:'260px',height:'60px',width:'120px'}}>
    LogIn
  </Button>


</Form>

  </div>  
</Container>       
          
          
          
          
         <Footer/>
            
        </div>
    )
}

export default Adminlogin;
