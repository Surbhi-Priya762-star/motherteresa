import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import{Button} from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer/Footer';

function AimsandObjective() {
    return (
        <div>
 <Header/>
            <div className="Main3">
    
    <h1 className="aboutus">Aims and Objectives</h1>
<Row className="row">
<Col>
  <img className="Image2" src="\Images\Aboutus.jpg" alt="AboutUS" />
  </Col>
  <Col>
 
  <p style={{fontSize:'28px', color: 'aliceblue',fontFamily: 'Righteous', fontWeight: '400', marginTop:'30px'}}>
  The Main aim of the school is to impart to the students is to impart quality to the students to able to meet the global challenges with their feet firmly grounded in the Indian culture.To achieve the goal of all round development sufficient opportunities,healthy and  congenial environment provide to children.
  </p>
 
  </Col>

  <Col>
  <img className="Image2" src="\Images\image6.png" alt="AboutUS" />
  <div className="session"><h4 className="text6">For session 2021-2022</h4></div>
  </Col>
</Row>
</div>   





            <Footer/>


            
        </div>
    )
}

export default AimsandObjective
