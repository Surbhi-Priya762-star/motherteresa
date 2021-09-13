import React from 'react';
import { Container, Table } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header'

function Results() {
    return (
        <div>
            <Header/>
            <Container>
            <div style={{height:'1250px', border: '8px dotted #f65868', backgroundColor: '#5c616e',fontSize:'22px', color: 'aliceblue',fontFamily: 'Righteous', fontWeight: '100',marginTop:'40px'}}>
            <h1 style={{color: 'rgb(2, 2, 48)', fontWeight: '900',fontSize: '80px', marginLeft:'50px'}}> C. Results and Academics </h1>
            <Table striped bordered hover size="sm" style={{textAlign:'center',marginTop:'50px'}}> 
  <thead>
    <tr>
      <th>Sl No.</th>
      <th style={{height:'60px',width:'480px'}}>Documents/Information</th>
      <th>Upload Documents</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
     <td style={{height:'90px',width:'480px'}}>Fee Structure of the School </td>
      <td> <td style={{margin:'auto',textAlign:'center'}}><input
        type="file"
       /></td></td>
      
    </tr>
    <tr>
      <td>2</td>
      <td style={{height:'90px',width:'480px'}}>Annual Academic Calender</td>
      <td> <td style={{margin:'auto',textAlign:'center'}}><input
        type="file"
       /></td></td>
     
    </tr>
    <tr>
      <td>3</td>
      <td style={{height:'90px',width:'480px'}} >List of School Management Committee (SMC)</td>
      <td> <td style={{margin:'auto',textAlign:'center'}}><input
        type="file"
       /></td></td>
    
    </tr>
    <tr>
      <td>4</td>
      <td style={{height:'90px',width:'480px'}} >List of Parents Teachers association(PTA) Members</td>
      <td> <td style={{margin:'auto',textAlign:'center'}}><input
        type="file"
       /></td></td>
    
    </tr>
    <tr>
      <td>5</td>
      <td style={{height:'90px',width:'480px'}}>Last Three-Years Results of the Board Examination as per Applicability</td>
      <td> <td style={{margin:'auto',textAlign:'center'}}><input
        type="file"
       /></td></td>

    </tr>
   
  </tbody>
</Table>
<h2 style={{color: 'rgb(2, 2, 48)', fontWeight: '700',fontSize: '60px', marginLeft:'50px',marginTop:'40px'}}> C.1. Result Class:X </h2>
            <Table striped bordered hover size="sm" style={{textAlign:'center',marginTop:'20px'}}> 
  <thead>
    <tr>
      <th>Sl No.</th>
      <th >Year</th>
      <th>No. of Registered Students</th>
      <th>No. of Student Passed </th>
      <th>Pass Percentage </th>
      <th>Remarks </th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
     <td > </td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      
    </tr>
    </tbody>
</Table>
<h2 style={{color: 'rgb(2, 2, 48)', fontWeight: '700',fontSize: '60px', marginLeft:'50px',marginTop:'40px'}}> C.1. Result Class:XII </h2>
            <Table striped bordered hover size="sm" style={{textAlign:'center',marginTop:'20px'}}> 
  <thead>
    <tr>
      <th>Sl No.</th>
      <th >Year</th>
      <th>No. of Registered Students</th>
      <th>No. of Student Passed </th>
      <th>Pass Percentage </th>
      <th>Remarks </th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
     <td > </td>
      <td></td>
      <td></td>
      <td></td>
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

export default Results
