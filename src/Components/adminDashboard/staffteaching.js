import React from 'react';
import { Container } from 'react-bootstrap';
import { Input, Button } from 'antd';
import { toast, ToastContainer } from 'react-toastify';
import { getDatabase, ref, set } from 'firebase/database';
const StaffTeaching = () => {
  const db  =  getDatabase();

  const [staff, setStaff] = React.useState({
    Principal: '',
    teacher: '',
    pgt: '',
    tgt: '',
    prt: '',
    teachetSectionRatio: '',
    detailofspecial: '',
    counseller: '',

  })
  return (
    <Container style={{ width: '100%', height: '100%',  }}>
      <h1>Teaching Staff Details</h1>
      <table >
        <thead style={{ borderBottom: '1px solid gray' }}>

          <tr>
            <th style={{ padding: '20px' }}>
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
            <td>Principal </td>
            <td><Input style={{ width: '160px' }}placeholder='principal' onChange={({ target }) => {
              setStaff({
                ...staff,
                Principal: target.value
              })
            }} value={staff.campusArea} /></td>
          </tr>
          <tr style={{ padding: '20px', borderBottom: '1px solid gray' }}>
            <td>2</td>
            <td>Total No. of Teachers <br /> PGT <br /> TGT <br /> PRT</td>
            <td>
              <Input style={{ width: '160px' }} placeholder='no of teachers' onChange={({ target }) => {
              setStaff({
                ...staff,
                teacher: target.value
              })
              }} value={staff.sizeClass} /><br />
              <Input style={{ width: '160px' }} placeholder='pgt' onChange={({ target }) => {
                setStaff({
                  ...staff,
                  pgt: target.value
                })
              }} value={staff.sizeClass} /><br />
              <Input style={{ width: '160px' }} placeholder='tgt' onChange={({ target }) => {
              setStaff({
                ...staff,
                tgt: target.value
              })
              }} value={staff.sizeClass} /><br />
              <Input style={{ width: '160px' }} placeholder='prt' onChange={({ target }) => {
                setStaff({
                  ...staff,
                  prt: target.value
                })
              }} value={staff.prt} />
            </td>
          </tr>
          <tr style={{ padding: '20px', borderBottom: '1px solid gray' }}>
            <td>3</td>
            <td>Teacher Section Ratio</td>
            <td><Input style={{ width: '160px' }} placeholder='Teacher Section Ratio' onChange={({ target }) => {
              setStaff({
                ...staff,
                teachetSectionRatio: target.value
              })
            }} value={staff.teachetSectionRatio} /></td>
          </tr>
          <tr style={{ padding: '20px', borderBottom: '1px solid gray' }}>
            <td>4</td>
            <td>Details of Special Educator</td>
            <td><Input style={{ width: '160px' }} placeholder='Details of Special Educator' onChange={({ target }) => {
              setStaff({
                ...staff,
                detailofspecial: target.value
              })
            }} value={staff.detailofspecial} /></td>
          </tr>
          <tr style={{ padding: '20px', borderBottom: '1px solid gray' }}>
            <td>5</td>
            <td>Details of Counsellor and Welness Teacher</td>
            <td><Input style={{width: '160px'}} placeholder='counseller details' onChange={({ target }) => {
              setStaff({
                ...staff,
                counseller: target.value
              })
            }} value={staff.counseller} /></td>
          </tr>
        </tbody>
      </table>
      <Button onClick={() => {
        console.log('Staf', staff)
        set(ref(db, 'staff'),staff);
        toast.dark('Staff Data updated')
      }} type="ghost" style={{ margin: '10px' }} >
        Add Staff detail
      </Button>
      <ToastContainer />
    </Container>
  )
}
export default StaffTeaching;