import React from 'react';

import Header from './Header';
import Footer from './Footer/Footer';
import { Container } from 'react-bootstrap';

function Principaldesk() {
    return (
        <div>
           <Header/>
           <Container>
            <div style={{height:'1600px', border: '8px dotted #f65868', backgroundColor: '#5c616e',fontSize:'22px', color: 'aliceblue',fontFamily: 'Righteous', fontWeight: '100'}}>
    
    <h1 className="aboutus">From Principal Desk</h1>


  <img style={{marginLeft:'430px'}} className="Images2" src="\Images\director.png" alt="AboutUS" />
  
 
 
  <p style={{marginLeft:'50px'}}>
  Dear Students, Staff and Parents:

  <p >Welcome to the 2019-2020 school year! Our commitment at Mother Teresa Modern Public School is to provide a safe and intellectually challenging environment that will empower students to become innovative thinkers, creative problem solvers and inspired learners prepared to thrive in the twenty-first century.</p>

  <p >High standards and expectations for each student in regard to academic performance, co-curricular participation, and responsible citizenship are the foundation of our school. It is with pride that we hold these high standards and ask each of our students to commit to maintaining the extraordinary record of achievement and contribution that has been the legacy of Mother Teresa Modern Public School students. It is the contribution of our students to our school community that makes Mother Teresa Modern Public School an exceptional learning community. Full participation in academic and co-curricular programs and a willingness to act responsibly as an individual within our educational environment are the factors that enable all to have a successful and enjoyable year.</p>

  <p >Below are our beliefs regarding teaching and learning that we developed as part of this process.</p>

<ul>We believe that effective teachers:

<li>Create opportunities for intellectual risk-taking, collaboration, problem-solving, and application of classroom learning to real life situations;</li>
<li>Implement strategies that promote ownership of learning to students;</li>
<li>Design instruction to integrate a variety of innovative technological tools and resources to enhance learning;</li>
<li>Demonstrate ongoing professional growth in order to increase the quality of instruction;</li>
<li>Collaborate with colleagues to share and discuss exemplary practices, interpret student performance data, and design assessments that promote twenty-first century skills.</li>

</ul>
<ul>We believe that successful students:

<li>Communicate in a meaningful way for a variety of purposes and audiences;</li>
<li>Demonstrate a sensitivity to the precision and nuances of written, visual, and aural medium through comprehension, interpretation, and evaluation;</li>
<li>Employ critical and creative thinking skills to solve problems; and
Pose questions, examine possibilities, and apply skills to find solutions to authentic issues.</li>
<li>Make positive choices related to physical and mental wellness; and</li>
<li>Contribute to the local and global community in a collaborative and respectful manner</li>
</ul>
In conclusion, I wish you all a wonderful school year. If I can be of any assistance, please do not hesitate to contact me and know that my door is always open. I can be reached at  smtmps1999@gmail.com also. I am honored to serve as your principal.
<br/>
<br/>
Sincerely,
<br/>
Meenu Madan
  </p>
 
  

 

</div>   


</Container>


            <Footer/>

 






        </div>
    )
}

export default Principaldesk;
