/* eslint-disable default-case */
import React from 'react';
import { Container } from 'react-bootstrap';
import {Upload, Button, } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import { getDatabase, ref as dbref, set  } from "firebase/database";


import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast, ToastContainer } from 'react-toastify';
const DocumentDetails = () => {
  const database = getDatabase();
  const storage = getStorage();
  const uploadfileFunc = (uploadState, state, ) => {
    console.log('callled', );
    uploadState.on('state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadState.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
            switch(state) {
              case 1: {
                setTableLink({
                  ...tableLinks,
                  affiliation: downloadURL,

                })

                set(dbref(database, 'doc/1'),{
                  affiliation: downloadURL
                })
                
                return ''
              }
              case 2: {
                setTableLink({
                  ...tableLinks,
                  Societies: downloadURL,

                })
                set(dbref(database, 'doc/2'), {
                  Societies: downloadURL
                })
                return ''
              }
              case 3: {
                setTableLink({
                  ...tableLinks,
                  NOC: downloadURL,

                })
                set(dbref(database, 'doc/3'), {
                  NOC: downloadURL
                })
                return ''
              }
              case 4: {
                setTableLink({
                  ...tableLinks,
                  Recognition: downloadURL,

                })
                set(dbref(database, 'doc/4'), {
                  Recognition: downloadURL
                })
                return ''
              }
              case 5: {
                setTableLink({
                  ...tableLinks,
                  Building: downloadURL,

                })
                set(dbref(database, 'doc/5'), {
                  Building: downloadURL
                })
                return ''
              }
              case 6: {
                setTableLink({
                  ...tableLinks,
                  fire: downloadURL,

                })
                set(dbref(database, 'doc/6'), {
                  fire: downloadURL
                })
                return ''
              }
              case 7 : {
                setTableLink({
                  ...tableLinks,
                  DEO: downloadURL,

                })
                set(dbref(database, 'doc/7'), {
                  DEO: downloadURL
                })
                return ''
              }
              case 8 : { 
                  setTableLink({
                  ...tableLinks,
                  Water: downloadURL,

                })
                  set(dbref(database, 'doc/8'), {
                    Water: downloadURL
                  })
                return ''
                }
              default: {
                return ''
              }
            }
        });
      }
    );
  }
  const [tableLinks, setTableLink] = React.useState({
    affiliation: '',
    Societies: '',
    NOC: '',
    Recognition: '',
    Building: '',
    fire: '',
    DEO: '',
    Water: '',
  })
  return (
    <Container style={{ width: '100%', height: '100%', }}>

      <table >
        <thead style={{borderBottom:'1px solid gray'}} >

        <tr>
            <th style={{ textAlign: 'center', }}>
                Documents
          </th>
            <th style={{ textAlign: 'center',  }}>
            Upload File
          </th>
            <th style={{ textAlign: 'center', paddingRight: '20px'}}>
            Link
          </th>
        </tr>
        </thead>
        <tbody>

        <tr style={{borderBottom: '1px solid grey'}}>
          <td>
            <p className="code">
              Copies of Affiliation/Upgradation letter and Recent Extension of Affiliation , if Any
            </p>
          </td>
          <td style={{padding: '20px'}}>
              <Upload accept=" image/*" onChange={async ({ file }) => {
                console.log('target.file', file);
                const storageRef = ref(storage, "images/1.png");

                const uploadTask = uploadBytesResumable(storageRef, file.originFileObj);
                uploadfileFunc(uploadTask, 1);
              }}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
              
          </td>
          <td style={{paddingleft: '20px'}}>
             {tableLinks.affiliation}
          </td>
        </tr>
        <tr style={{borderBottom: '1px solid grey'}}>
          <td>
            <p className="code">
                Copies of Societies/Trust/Company Registration/Remewal Certificate as Applicable
            </p>
          </td>
          <td style={{padding: '20px'}}>
              <Upload accept=" image/*,.pdf" onChange={({ file }) => {
                // console.log('target.file', target.file);
                // console.log('file', target.file);
                const storageRef = ref(storage, 'images/2.png');

                const uploadTask = uploadBytesResumable(storageRef, file.originFileObj);
                uploadfileFunc(uploadTask, 2);
              }}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
              
          </td>
          <td style={{paddingleft: '20px'}}>
              {tableLinks.Societies}
          </td>
        </tr>
        <tr style={{borderBottom: '1px solid grey'}}>
          <td>
            <p className="code">
                Copy of Objection Certificate (NOC) issued, if applicable by State GOVT/UT
            </p>
          </td>
          <td style={{padding: '20px'}}>
              <Upload accept=" image/*,.pdf" onChange={({ file }) => {
                // console.log('target.file', .file);
                // const storageRef = ref(storage, target.file[0].name);

                // const uploadTask = uploadBytesResumable(storageRef, target.file[0]);
                // uploadfileFunc(uploadTask, 1);
                const storageRef = ref(storage, 'images/3.png');

                const uploadTask = uploadBytesResumable(storageRef, file.originFileObj);
                uploadfileFunc(uploadTask, 3);
              }}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
              
          </td>
          <td style={{paddingleft: '20px'}}>
              {tableLinks.NOC}
          </td>
        </tr>
        <tr style={{borderBottom: '1px solid grey'}}>
          <td>
            <p className="code">
                Copies of Recognition Certificate under RTE ACT 2009 and it's Renewal if Applicable
            </p>
          </td>
          <td style={{padding: '20px'}}>
              <Upload accept=" image/*,.pdf" onChange={({ file }) => {
                // console.log('target.file', target.file);
                const storageRef = ref(storage, 'images/4.png');

                const uploadTask = uploadBytesResumable(storageRef, file.originFileObj);
                uploadfileFunc(uploadTask, 4);
              }}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
              
          </td>
          <td style={{paddingleft: '20px'}}>
              {tableLinks.Recognition}
          </td>
        </tr>
        <tr style={{borderBottom: '1px solid grey'}}>
          <td>
            <p className="code">
                Copy of Valid Building Safety Certificate as per the national Building Code
            </p>
          </td>
          <td style={{padding: '20px'}}>
              <Upload accept=" image/*,.pdf" onChange={({ file }) => {
                // console.log('target.file', target.file);
                // const storageRef = ref(storage, target.file[0].name);

                // const uploadTask = uploadBytesResumable(storageRef, target.file[0]);
                // uploadfileFunc(uploadTask, 1);
                const storageRef = ref(storage, 'images/5.png');

                const uploadTask = uploadBytesResumable(storageRef, file.originFileObj);
                uploadfileFunc(uploadTask, 5);
              }}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
              
          </td>
          <td style={{paddingleft: '20px'}}>
              {tableLinks.Building}
          </td>
        </tr>
        <tr style={{borderBottom: '1px solid grey'}}>
          <td>
            <p className="code">
                Copy of Valid fire Safety Certificate issued by the Competent Authority
            </p>
          </td>
          <td style={{padding: '20px'}}>
              <Upload accept=" image/*,.pdf" onChange={({ file }) => {
                // console.log('target.file', );
                // const storageRef = ref(storage, target.file[0].name);

                // const uploadTask = uploadBytesResumable(storageRef, target.file[0]);
                // uploadfileFunc(uploadTask, 1);
                const storageRef = ref(storage, 'images/6.png');

                const uploadTask = uploadBytesResumable(storageRef, file.originFileObj);
                uploadfileFunc(uploadTask, 6);
              }}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
              
          </td>
          <td style={{paddingleft: '20px'}}>
              {tableLinks.fire}
          </td>
        </tr>
        <tr style={{borderBottom: '1px solid grey'}}>
          <td>
            <p className="code">
                Copy of DEO Certificate Submitted by the School for affiliation/Upgradation/Extension of affiliation or self Certification by School
            </p>
          </td>
          <td style={{padding: '20px'}}>
              <Upload accept=" image/*,.pdf" onChange={({ file }) => {
                // console.log('file', target.file);
                // const storageRef = ref(storage, target.file[0].name);

                // const uploadTask = uploadBytesResumable(storageRef, target.file[0]);
                // uploadfileFunc(uploadTask, 7);
                const storageRef = ref(storage, 'images/7.png');

                const uploadTask = uploadBytesResumable(storageRef, file.originFileObj);
                uploadfileFunc(uploadTask, 7);
              }}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
              
          </td>
          <td style={{paddingleft: '20px'}}>
              {tableLinks.DEO}
          </td>
        </tr>
        <tr style={{borderBottom: '1px solid grey'}}>
          <td>
            <p className="code">
                Copies of Valid Water, Health and Sanitation Certificate
            </p>
          </td>
          <td style={{padding: '20px'}}>
              <Upload accept=" image/*,.pdf" onChange={({ file }) => {
                // console.log('target.file', target.file);
                // const storageRef = ref(storage, target.file[0].name);

                // const uploadTask = uploadBytesResumable(storageRef, target.file[0]);
                // uploadfileFunc(uploadTask, 8);
                const storageRef = ref(storage, 'images/8.png');

                const uploadTask = uploadBytesResumable(storageRef, file.originFileObj);
                uploadfileFunc(uploadTask, 8);
              }}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
              
          </td>
          <td style={{paddingleft: '20px'}}>
              {tableLinks.Water}
          </td>
        </tr>
        </tbody>
      </table>
      <ToastContainer />
    </Container>
  )
}
export default DocumentDetails;