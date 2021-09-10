import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import{Button} from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer/Footer';


function AboutUs() {
    return (
        <div>
            <Header/>
            <div className="Main3">
    
    <h1 className="aboutus">About Us</h1>
<Row className="row">
<Col>
  <img className="Image2" src="\Images\Aboutus.jpg" alt="AboutUS" />
  </Col>
  <Col>
  <p style={{fontSize:'28px', color: 'aliceblue',fontFamily: 'Righteous', fontWeight: '400'}}>
  Mother Teresa Modern Public School is a premier educational institution of the region ,Established by Major R.S Chahal  city magistrate in the year 1999.The School is affiliated to Central Board of Secondary Education,Delhi upto Secondary Level.

Mother Teresa Modern Public School is being run  by  the management  of Karan Urban and rural Development Trust.Under the guidance of the worth Director of our  parent body by  Dr. R.Kumar(from Moscow,Russia),this school is imparting quality education to the students.
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

export default AboutUs;
