import { Input, Button } from 'antd';
import React from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { getDatabase, ref, set } from "firebase/database";

const BasicDetails = () => {
  const database  =  getDatabase();

  const [basicDetail, setBasicDetail] = React.useState({
    schoolName: '',
    affilationNumber: '',
    sku: '',
    principaldetail: '',
    schoolEmailId: '',
    contactDetail: '',
    completeAddress: ''
  })

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex',  flexDirection: 'column', alignItems: 'center', overflow: 'scroll', overflowY: 'scroll'}}>
      <h1> Basic Details </h1>
      <label style={{ textAlign: 'left', marginTop: '20px' }}> Name Of School </label>
      <Input onChange={({ target }) => setBasicDetail({...basicDetail, schoolName: target.value})} style={{width: '450px', marginTop: '10px'}}   placeholder="Name Of School" />
      <label  style={{ textAlign: 'left', marginTop: '20px' }}> Affilation Number </label>
      <Input onChange={({ target }) => setBasicDetail({ ...basicDetail, affilationNumber: target.value })} style={{ width: '450px', marginTop: '10px' }} placeholder="Affilation Number" />
      <label  style={{ textAlign: 'left', marginTop: '20px' }}> School Code(If Applicable) </label>
      <Input onChange={({ target }) => setBasicDetail({ ...basicDetail, sku: target.value })} style={{ width: '450px', marginTop: '10px' }} placeholder="School Code(If Applicable)" />
      <label  style={{ textAlign: 'left', marginTop: '20px' }}> Complete Address </label>
      <Input onChange={({ target }) => setBasicDetail({ ...basicDetail, completeAddress: target.value })} style={{ width: '450px', marginTop: '10px' }} placeholder="School Complete Address " />
      <label style={{ textAlign: 'left', marginTop: '20px' }}> Principal Name and qualification </label>
      <Input onChange={({ target }) => setBasicDetail({ ...basicDetail, principaldetail: target.value })} style={{ width: '450px', marginTop: '10px' }} placeholder="Principal Name and qualification" />
      <label style={{ textAlign: 'left', marginTop: '20px' }} > School Email ID </label>
      <Input onChange={({ target }) => setBasicDetail({ ...basicDetail, schoolEmailId: target.value })} style={{ width: '450px', marginTop: '10px' }} placeholder="School Email ID" />
      <label style={{textAlign: 'left', marginTop: '20px'}} > Contact Details (Landline/Mobile)  </label>
      <Input onChange={({ target }) => setBasicDetail({ ...basicDetail, contactDetail: target.value })} style={{ width: '450px', marginTop: '10px' }} placeholder="Contact Details (Landline/Mobile)" />
      <Button onClick={() => { 
        if (basicDetail.schoolEmailId && basicDetail.schoolName && basicDetail.principaldetail && basicDetail.contactDetail) {
          set(ref(database, '/basicdetail'),basicDetail)
          toast.dark('Basic detail Updated!')
          return ''
        }
        toast.dark('no up there go !')
      }} type="primary" shape="round" style={{marginTop: '10px'}}   >
        Submit details
      </Button>
      <ToastContainer />
    </div>
  )
}
export default BasicDetails;
