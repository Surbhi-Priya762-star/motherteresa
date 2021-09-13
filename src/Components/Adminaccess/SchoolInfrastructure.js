import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header';
import { Container, Table } from 'react-bootstrap';

function SchoolInfrastructure() {
    return (
        <div>
            <Header/>

            <Container>
            <div style={{height:'1000px', border: '8px dotted #f65868', backgroundColor: '#5c616e',fontSize:'28px', color: 'aliceblue',fontFamily: 'Righteous', fontWeight: '100',marginTop:'40px'}}>
            <h1 style={{color: 'rgb(2, 2, 48)', fontWeight: '900',fontSize: '80px', marginLeft:'250px'}}>E. School Infrastructure </h1>
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
     <td style={{height:'90px',width:'480px'}}>Total Campus Area of the School(insq.mtr.)</td>
      <td></td>
      
    </tr>
    <tr>
      <td>2</td>
      <td style={{height:'90px',width:'480px'}}>No. and size of the class rooms(in sq.ft.mtr.)</td>
      <td></td>
     
    </tr>
    <tr>
      <td>3</td>
      <td style={{height:'90px',width:'480px'}} >N0. and size of laboratories including Computer labs(in sq.mtr.)</td>
      <td></td>
    
    </tr>
    <tr>
      <td>4</td>
      <td style={{height:'90px',width:'480px'}} >Internet Facility(Y/N)</td>
      <td></td>
    
    </tr>
    <tr>
      <td>5</td>
      <td style={{height:'90px',width:'480px'}}>No. of Girls Toilet</td>
      <td></td>

    </tr>
    <tr>
      <td>6</td>
      <td style={{height:'90px',width:'480px'}}>No. of Boys Toilet</td>
      <td></td>
    
    </tr>
    <tr>
      <td>7</td>
      <td style={{height:'90px',width:'480px'}}>Link of Youtube Video of the Inspection of the School Covering the infrastructure of the School</td>
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

export default SchoolInfrastructure
