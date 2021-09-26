import React from 'react';
import { Container } from 'react-bootstrap';

import Header from './Header';
 
import Footer from './Footer/Footer';

function Directormessage() {
    return (
        <div>
           <Header/>
           <Container>
            <div style={{height:'1200px', border: '8px dotted #f65868', backgroundColor: '#5c616e',margin:'auto'}}>
    
    <h1 className="aboutus">Managing Director's Message</h1>


            <img style={{ marginLeft: '400px' }} src="https://firebasestorage.googleapis.com/v0/b/motherteresa-d7f08.appspot.com/o/assets%2Fdirector.png?alt=media&token=66551fc6-b998-48ef-b72c-03865f56f66a" alt="AboutUS" />

 
  <p style={{fontSize:'22px', color: 'aliceblue',fontFamily: 'Righteous', fontWeight: '100', margin:'auto'}}>
  <span style={{fontWeight: '800', color:'orange'}}>“Each human being is born with a unique set of potential that yearns to be fulfilled as surely as the acorn yearns to become the oak within it”</span>–Aristotle

<p  style={{fontSize:'22px', color: 'aliceblue',fontFamily: 'Righteous', fontWeight: '100', margin:'auto'}}>Mother Teresa Modern Public School provides an environment in which every student discovers and realizes his inborn potential. We create self-awareness amongst children and help in capacity building. We are concerned about the overall health and wellbeing of learners encompassing their mental, physical, emotional and spiritual dimensions.

In the firm belief that “Good education is the high road to personal and national progress”, the school aims at drawing out what is best in the child, through appropriate learning experiences and opportunities, a desire to learn, not just in the classroom, but all the time making it an on-going process through life.

The school strives to foster in the student a sense of values and an appreciation of his/her own culture, tradition and heritage, as well as of what is good in other cultures.</p>

<p>The school has already established  itself as a fastest growing school. The challenging task of nurturing  tender  budding  minds in the school is being looked after with  poise, grace & commitment by dedicated teachers. The team of  MTMPS firmly believes that with patience & perseverance any goal can be accomplished.

The quest of excellence encouraged in Mother Teresa Modern Public School rests on the strong belief that every child has it within himself to excel.The management is supporting the staff of  Mother Teresa Modern Public School in all their endeavors like a rock of Gibraltar. We also rely on the powerful role of parents in supporting and respecting the endeavors of the school. I trust that the parents along with the team of  Mother Teresa Modern Public School will help the children grow as self-respecting and courageous torch bearers of our nation. Jai Hind. </p>
<span style={{fontWeight: '800',color:'orange'}}>
Naresh Kumar (B.A)(B.ED)(M.A English)(LLB)(LLM)
<br/>
Managing Director
<br/>
Mother Teresa Modern Public School
</span>
  </p>
 

</div>   

</Container>



            <Footer/>

 






        </div>
    )
}

export default Directormessage
