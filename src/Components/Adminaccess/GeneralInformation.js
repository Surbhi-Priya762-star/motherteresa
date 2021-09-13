import React from 'react';
import { Container, Table } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header';

function GeneralInformation() {
    return (
        <div>
            <Header/>
<Container>
            <div style={{height:'1000px', border: '8px dotted #f65868', backgroundColor: '#5c616e',fontSize:'28px', color: 'aliceblue',fontFamily: 'Righteous', fontWeight: '100',marginTop:'40px'}}>
            <h1 style={{color: 'rgb(2, 2, 48)', fontWeight: '900',fontSize: '80px', marginLeft:'250px'}}> A. General Information </h1>
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
     <td style={{height:'90px',width:'480px'}}>Name of The School</td>
      <td></td>
      
    </tr>
    <tr>
      <td>2</td>
      <td style={{height:'90px',width:'480px'}}>Affiliation Number(If Applicable)</td>
      <td></td>
     
    </tr>
    <tr>
      <td>3</td>
      <td style={{height:'90px',width:'480px'}} >School Code(If Applicable)</td>
      <td></td>
    
    </tr>
    <tr>
      <td>4</td>
      <td style={{height:'90px',width:'480px'}} >Complete Address with Pin Code</td>
      <td></td>
    
    </tr>
    <tr>
      <td>5</td>
      <td style={{height:'90px',width:'480px'}}>Principal Name and qualification</td>
      <td></td>

    </tr>
    <tr>
      <td>6</td>
      <td style={{height:'90px',width:'480px'}}>School Email ID</td>
      <td></td>
    
    </tr>
    <tr>
      <td>7</td>
      <td style={{height:'90px',width:'480px'}}>Contact Details (Landline/Mobile)</td>
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

export default GeneralInformation;
