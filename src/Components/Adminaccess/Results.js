import React, {useState, useEffect} from 'react';
import { Container, Table } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header'
import { getDatabase, ref, get } from 'firebase/database'
function Results() {
  const [tableData, setTableData] = useState([]);
  const [result10, setResul10] = useState([]);
  const [result12, setresult12] = useState([]);
  const db = getDatabase();
  useEffect(() => {
    // const starCountRef = ref(db,);
    const starRef = ref(db, 'result');
    get(starRef).then((snapshot) => {
      const data = snapshot.val();
      // updateStarCount(postElement, data);
      console.log('data', data)
      if(data) {
        setTableData([...data])
      }
      
    });
    }, [])
  useEffect(() => {
    // const starCountRef = ref(db,);
    const starRef = ref(db, 'resultlist10');
    get(starRef).then((snapshot) => {
      const data = snapshot.val();
      // updateStarCount(postElement, data);
      console.log('data', data)
      if(data) {
        setResul10([...data])
      }
      
    });
    }, [])
  useEffect(() => {
    // const starCountRef = ref(db,);
    const starRef = ref(db, 'resultlist12');
    get(starRef).then((snapshot) => {
      const data = snapshot.val();
      // updateStarCount(postElement, data);
      console.log('data', data)
      if(data) {
        setresult12([...data])
      }
      
    });
    }, [])
    return (
        <div>
            <Header/>
            <Container>
            <div style={{height:'100%', border: '8px dotted #f65868', backgroundColor: 'white',fontSize:'22px', color: 'aliceblue',fontFamily: 'Righteous', fontWeight: '100',marginTop:'40px'}}>
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
                  <td> <td style={{ margin: 'auto', textAlign: 'center' }}><a href={tableData[1]?.fee}>{tableData[1]?.fee}</a></td></td>
      
    </tr>
    <tr>
      <td>2</td>
      <td style={{height:'90px',width:'480px'}}>Annual Academic Calender</td>
      <td> <td style={{margin:'auto',textAlign:'center'}}>
                    <a href={tableData[2]?.calender}>{tableData[2]?.calender}</a>
        </td></td>
     
    </tr>
    <tr>
      <td>3</td>
      <td style={{height:'90px',width:'480px'}} >List of School Management Committee (SMC)</td>
                  <td> <td style={{ margin: 'auto', textAlign: 'center' }}><a href={tableData[3]?.smc}>{tableData[3]?.smc}</a></td></td>
    
    </tr>
    <tr>
      <td>4</td>
      <td style={{height:'90px',width:'480px'}} >List of Parents Teachers association(PTA) Members</td>
                  <td> <td style={{ margin: 'auto', textAlign: 'center' }}><a href={tableData[4]?.pta}>{tableData[4]?.pta}</a></td></td>
    
    </tr>
    <tr>
      <td>5</td>
      <td style={{height:'90px',width:'480px'}}>Last Three-Years Results of the Board Examination as per Applicability</td>
                  <td> <td style={{ margin: 'auto', textAlign: 'center' }}><a href={tableData[5]?.result}>{tableData[5]?.result}</a></td></td>

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
    {
      result10?.map((data) => {
        return (
          <tr>
            <td>{data.Sno}</td>
            <td >{data.year} </td>
            <td>{data.registedStudent}</td>
            <td>{data.studentpassed}</td>
            <td>{data.studentpassed}</td>
            <td>{data.remark}</td>

          </tr>
        )
      })
    }
    
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
                {
                  result12?.map((data) => {
                    return (
                      <tr>
                        <td>{data.Sno}</td>
                        <td >{data.year} </td>
                        <td>{data.registedStudent}</td>
                        <td>{data.studentpassed}</td>
                        <td>{data.studentpassed}</td>
                        <td>{data.remark}</td>

                      </tr>
                    )
                  })
                }

    </tbody>
</Table>










</div>
</Container>


















            <Footer/>
        </div>
    )
}

export default Results
