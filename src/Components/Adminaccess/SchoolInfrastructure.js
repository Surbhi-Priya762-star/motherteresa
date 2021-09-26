import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header';
import { Container, Table } from 'react-bootstrap';
import { getDatabase, ref, get } from 'firebase/database';

function SchoolInfrastructure() {
  const [infra, setinfra] = React.useState({});
  const db = getDatabase();
  React.useEffect(() => {
    const starRef = ref(db, 'infra');
    get(starRef).then((snapshot) => {
      const data = snapshot.val();
      // updateStarCount(postElement, data);
      console.log('data', data)
      if(data) {
        setinfra({ ...data })
      }
      
      // setTableData([...data])
    });
  }, [])
    return (
        <div>
            <Header/>

            <Container>
            <div style={{height:'1000px', border: '8px dotted #f65868', backgroundColor: 'white',fontSize:'28px', color: 'aliceblue',fontFamily: 'Righteous', fontWeight: '100',marginTop:'40px'}}>
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
                  <td>{infra?.campusArea}</td>
      
    </tr>
    <tr>
      <td>2</td>
      <td style={{height:'90px',width:'480px'}}>No. and size of the class rooms(in sq.ft.mtr.)</td>
                  <td>{infra?.sizeClass}</td>
     
    </tr>
    <tr>
      <td>3</td>
      <td style={{height:'90px',width:'480px'}} >N0. and size of laboratories including Computer labs(in sq.mtr.)</td>
                  <td>{infra?.sizeLab}</td>
    
    </tr>
    <tr>
      <td>4</td>
      <td style={{height:'90px',width:'480px'}} >Internet Facility(Y/N)</td>
                  <td>{infra?.internet}</td>
    
    </tr>
    <tr>
      <td>5</td>
      <td style={{height:'90px',width:'480px'}}>No. of Girls Toilet</td>
                  <td>{infra?.girltoilet}</td>

    </tr>
    <tr>
      <td>6</td>
      <td style={{height:'90px',width:'480px'}}>No. of Boys Toilet</td>
                  <td>{infra?.boytoilet}</td>
    
    </tr>
    <tr>
      <td>7</td>
      <td style={{height:'90px',width:'480px'}}>Link of Youtube Video of the Inspection of the School Covering the infrastructure of the School</td>
                  <td>{infra?.video}</td>
    
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
