import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer';
import { Container, Table } from 'react-bootstrap';
import { getDatabase, ref, get } from 'firebase/database'
import Header from '../Header';

function StaffTeaching() {
  const [staffData, setStaff] = useState({});
  const db = getDatabase();
  useEffect(() => {
    const starRef = ref(db, 'staff');
    get(starRef).then((snapshot) => {
      const data = snapshot.val();
      // updateStarCount(postElement, data);
      console.log('data', data)
      if(data) {
        setStaff({ ...data })
      }
      
      // setTableData([...data])
    });
  }, [])

    return (
        <div>
     <Header/>
     <Container>
            <div style={{height:'1000px', border: '8px dotted #f65868', backgroundColor: 'white',fontSize:'28px', color: 'aliceblue',fontFamily: 'Righteous', fontWeight: '100',marginTop:'40px'}}>
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
                  <td>{staffData?.Principal}</td>
      
    </tr>
    <tr>
    <td>2</td>

<td style={{height:'90px',width:'480px'}}>Total No. of Teachers<br/><hr style={{color:'white'}}/>PGT<br/><hr style={{color:'white'}}/>TGT<br/><hr style={{color:'white'}}/>PRT</td>
                  <td>{staffData?.teacher}<br /><hr style={{ color: 'white' }} />{staffData?.pgt}<br /><hr style={{ color: 'white' }} />{staffData?.tgt}<br /><hr style={{ color: 'white' }} />{staffData?.prt}</td>

    </tr>
    <tr>
      <td>3</td>
      <td style={{height:'90px',width:'480px'}} >Teacher Section Ratio</td>
                  <td>{staffData?.teachetSectionRatio}</td>
    
    </tr>
    <tr>
      <td>4</td>
      <td style={{height:'90px',width:'480px'}} >Details of Special Educator</td>
                  <td>{staffData?.detailofspecial}</td>
    
    </tr>
    <tr>
      <td>5</td>
      <td style={{height:'90px',width:'480px'}}>Details of Counsellor and Welness Teacher</td>
                  <td>{staffData?.counseller}</td>

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
