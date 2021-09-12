import React from 'react';
import Header from './Header';
import { Col,  Row } from 'react-bootstrap';
import Footer from './Footer/Footer';

function SocialMedia() {
    return (
        <div>
            <Header/>
            
                <div style={{backgroundColor:'#7791a1',height:'2000px', borderRadius:'45px',marginTop:'30px',width:'100%'}}>


<Row>
<h1 style={{color: 'rgb(2, 2, 48)', fontWeight: '900',fontSize: '80px', marginLeft:'600px'}}> Social Media Coverage </h1>
    <Col xs={6}>
                <img style={{marginLeft:'160px',height:'800px',width:'900px',marginTop:'50px'}}src="/Images/socialmediacoverage1.PNG" alt="career" />
          
                </Col>
                <Col xs={6}>
                <img style={{marginLeft:'160px',height:'800px',width:'900px',marginTop:'50px'}}src="/Images/socialmediacoverage2.PNG" alt="career" />
             
                </Col>
                <Col xs={6}>
                <img style={{marginLeft:'160px',height:'800px',width:'900px',marginTop:'50px'}}src="/Images/socialmediacoverage3.PNG" alt="career" />
              
                </Col>
                <Col xs={6}>
                <img style={{marginLeft:'160px',height:'800px',width:'900px',marginTop:'50px'}}src="/Images/socialmediacoverage4.PNG" alt="career" />
            
</Col>
<Col xs={12}>
<h1 style={{color: 'rgb(2, 2, 48)', fontWeight: '900',fontSize: '80px', marginLeft:'80px'}}> For more Updates Visit our Facebook Page <span style={{fontSize:'30px',fontWeight:'500'}}> <a href={"https://www.facebook.com/mtmpskurukshetra"} target="_blank" rel="noreferrer"
>FacebookLink</a></span></h1>
</Col>






</Row>


</div>


            <Footer/>
            
        </div>
    )
}

export default SocialMedia;
