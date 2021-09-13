import React from 'react'
import Footer from '../Footer/Footer';
import { Container, Table } from 'react-bootstrap';

import Header from '../Header';

function StaffTeaching() {
    return (
        <div>
     <Header/>
     <Container>
            <div style={{height:'1000px', border: '8px dotted #f65868', backgroundColor: '#5c616e',fontSize:'28px', color: 'aliceblue',fontFamily: 'Righteous', fontWeight: '100',marginTop:'40px'}}>
            <h1 style={{color: 'rgb(2, 2, 48)', fontWeight: '900',fontSize: '80px', marginLeft:'250px'}}> D.  Staff Teaching </h1>
            <Table striped bordered hover size="sm" style={{textAlign:'center',marginTop:'50px'}}> 
  <thead>
    <tr>
      <th>Sl No.</th>
      <th style={{height:'60px',width:'480px'}}>Information</th>
      <th>Details</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>

     <td style={{height:'90px',width:'480px'}}>Principal</td>
      <td></td>
      
    </tr>
    <tr>
    <td>2</td>

<td style={{height:'90px',width:'480px'}}>Total No. of Teachers<br/><hr style={{color:'white'}}/>PGT<br/><hr style={{color:'white'}}/>TGT<br/><hr style={{color:'white'}}/>PRT</td>
 <td><br/><hr style={{color:'white'}}/><br/><hr style={{color:'white'}}/><br/><hr style={{color:'white'}}/></td>
     
  
    </tr>
    <tr>
      <td>3</td>
      <td style={{height:'90px',width:'480px'}} >Teacher Section Ratio</td>
      <td></td>
    
    </tr>
    <tr>
      <td>4</td>
      <td style={{height:'90px',width:'480px'}} >Details of Special Educator</td>
      <td></td>
    
    </tr>
    <tr>
      <td>5</td>
      <td style={{height:'90px',width:'480px'}}>Details of Counsellor and Welness Teacher</td>
      <td></td>

    </tr>
  
  </tbody>
</Table>
</div>
</Container>
















          <Footer/>  
        </div>
    )
}

export default StaffTeaching;