import React from 'react';
import { Container } from 'react-bootstrap';
import { Input,Button } from 'antd'
import { getDatabase, ref, set } from 'firebase/database';
import {toast, ToastContainer} from 'react-toastify';
const Schoolinfra = () => {
  const db = getDatabase();


  const [infra, setInfra] = React.useState({
    campusArea: '',
    sizeClass: '',
    sizeLab: '',
    internet: '',
    girltoilet: '',
    boytoilet: '',
    video: ''
  })
  return (
    <Container style={{ width: '100%', height: '100%', }}>
      <h1> School Infrastructure Details </h1>
      <table >
        <thead style={{borderBottom: '1px solid gray'}}>
          
            <tr>
              <th style={{padding: '20px'}}>
                Sl No.
              </th>
            <th style={{ padding: '20px' }}>
                Information
              </th>
            <th style={{ padding: '20px' }}>
                Details
              </th>
            </tr> 
          
        </thead>
        <tbody>
          <tr style={{ padding: '20px', borderBottom: '1px solid gray' }}>
            <td>1</td>
            <td>Total Campus Area of the School(insq.mtr.)</td>
            <td><Input placeholder='campus area' onChange={({ target }) => {
              setInfra({
                ...infra,
                campusArea: target.value
              })
            }} value={infra.campusArea} /></td>
          </tr>
          <tr style={{ padding: '20px', borderBottom: '1px solid gray' }}>
            <td>2</td>
            <td>No. and size of the class rooms(in sq.ft.mtr.)</td>
            <td><Input placeholder='class size' onChange={({ target }) => {
              setInfra({
                ...infra,
                sizeClass: target.value
              })
            }} value={infra.sizeClass} /></td>
          </tr>
          <tr style={{ padding: '20px', borderBottom: '1px solid gray' }}>
            <td>3</td>
            <td>No. and size of laboratories including Computer labs(in sq.mtr.)</td>
            <td><Input placeholder='lab size ' onChange={({ target }) => {
              setInfra({
                ...infra,
                sizeLab: target.value
              })
            }} value={infra.sizeLab} /></td>
          </tr>
          <tr style={{ padding: '20px', borderBottom: '1px solid gray' }}>
            <td>4</td>
            <td>Internet Facility(Y/N)</td>
            <td><Input placeholder='internet' onChange={({ target }) => {
              setInfra({
                ...infra,
                internet: target.value
              })
            }} value={infra.internet} /></td>
          </tr>
          <tr style={{ padding: '20px', borderBottom: '1px solid gray' }}>
            <td>5</td>
            <td>No. of Girls Toilet</td>
            <td><Input placeholder='girl toilet' onChange={({ target }) => {
              setInfra({
                ...infra,
                girltoilet: target.value
              })
            }} value={infra.girltoilet} /></td>
          </tr>
          <tr style={{ padding: '20px', borderBottom: '1px solid gray' }}>
            <td>6</td>
            <td>No. of Boys Toilet</td>
            <td><Input placeholder='boys toilet' onChange={({ target }) => {
              setInfra({
                ...infra,
                boytoilet: target.value
              })
            }} value={infra.boytoilet} /></td>
          </tr>
          <tr style={{ padding: '20px', borderBottom: '1px solid gray' }}>
            <td>7</td>
            <td>Link of Youtube Video of the Inspection of the School Covering the infrastructure of the School</td>
            <td><Input placeholder='link' onChange={({target}) => {
              setInfra({
                ...infra,
                video: target.value
              })
            }} value={infra.video} /></td>
          </tr>
        </tbody>
      </table>
      <Button onClick={() => {
        set(ref(db, 'infra'), infra);
        toast.dark('Data Uploaded!')
        // console.log('Console', infra);
      }} type="ghost" style={{margin: '10px'}} >
            Add Infra detail
      </Button>
      <ToastContainer />
    </Container>
  )
}
export default Schoolinfra;