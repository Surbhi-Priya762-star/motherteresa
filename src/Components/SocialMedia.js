import React from 'react';
import Header from './Header';
import { Col,  Container,  Row } from 'react-bootstrap';
import Footer from './Footer/Footer';

function SocialMedia() {
    return (
        <div>
            <Header/>
            <Container>
                <div style={{backgroundColor:'#7791a1',height:'1200px', borderRadius:'45px',marginTop:'30px',width:'100%'}}>


<Row>
<h1 style={{color: 'rgb(2, 2, 48)', fontWeight: '900',fontSize: '80px', marginLeft:'260px'}}> Social Media Coverage </h1>
    <Col xs={6}>
                <img style={{marginLeft:'60px',height:'400px',width:'450px',marginTop:'50px'}}src="/Images/socialmediacoverage1.png" alt="career" />
          
                </Col>
                <Col xs={6}>
                <img style={{marginLeft:'60px',height:'400px',width:'450px',marginTop:'50px'}}src="/Images/socialmediacoverage2.png" alt="career" />
             
                </Col>
                <Col xs={6}>
                <img style={{marginLeft:'60px',height:'400px',width:'450px',marginTop:'50px'}}src="/Images/socialmediacoverage3.png" alt="career" />
              
                </Col>
                <Col xs={6}>
                <img style={{marginLeft:'60px',height:'400px',width:'450px',marginTop:'50px'}}src="/Images/socialmediacoverage4.png" alt="career" />
            
</Col>
<Col xs={12}>
<h1 style={{color: 'rgb(2, 2, 48)', fontWeight: '700',fontSize: '50px', marginLeft:'30px',marginTop:'20px'}}> For more Updates Visit our Facebook Page <span style={{fontSize:'30px',fontWeight:'500'}}> <a href={"https://www.facebook.com/mtmpskurukshetra"} target="_blank" rel="noreferrer"
>FacebookLink</a></span></h1>
</Col>






</Row>


</div>

</Container>
            <Footer/>
            
        </div>
    )
}

export default SocialMedia;
