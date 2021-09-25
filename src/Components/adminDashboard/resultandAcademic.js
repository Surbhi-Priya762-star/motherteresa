import React from 'react';
import { Container } from 'react-bootstrap';
import { Upload, Button, Input, } from 'antd'
import { UploadOutlined } from '@ant-design/icons';
import { getDatabase, ref as dbref, set, push } from "firebase/database";
import { toast, ToastContainer } from 'react-toastify';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const ResultandAcademic = () => {
  const [tableLinks, setTableLink] = React.useState({
    fee: '',
    calender: '',
    smc: '',
    pta: '',
    result: '',
  })
  const [class10, setClass10] = React.useState([
    {
      Sno: '',
      year: '',
      registedStudent: '',
      studentpassed: '',
      passpercent: '',
      remark: '',
    }
  ])
  const [class12, setClass12] = React.useState([
    {
      Sno: '',
      year: '',
      registedStudent: '',
      studentpassed: '',
      passpercent: '',
      remark: '',
    }
  ])
  const database = getDatabase();
  const storage = getStorage();
  const uploadfileFunc = (uploadState, state,) => {

    console.log('callled',);
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
          switch (state) {
            case 1: {
              setTableLink({
                ...tableLinks,
                fee: downloadURL,

              })
              set(dbref(database, 'result/1'), {
                fee: downloadURL
              })
              return ''
            }
            case 2: {
              setTableLink({
                ...tableLinks,
                calender: downloadURL,

              })
              set(dbref(database, 'result/2'), {
                calender: downloadURL
              })
              return ''
            }
            case 3: {
              setTableLink({
                ...tableLinks,
                smc: downloadURL,

              })
              set(dbref(database, 'result/3'), {
                smc: downloadURL
              })
              return ''
            }
            case 4: {
              setTableLink({
                ...tableLinks,
                pta: downloadURL,

              })
              set(dbref(database, 'result/4'), {
                pta: downloadURL
              })
              return ''
            }
            case 5: {
              setTableLink({
                ...tableLinks,
                result: downloadURL,

              })
              set(dbref(database, 'result/5'), {
                result: downloadURL
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
  return (
    <Container style={{ width: '100%', height: '100%',}}>
      <table >
        <thead style={{ borderBottom: '1px solid gray' }} >

          <tr>
            <th style={{ textAlign: 'center', }}>
              Documents
            </th>
            <th style={{ textAlign: 'center', }}>
              Upload File
            </th>
            <th style={{ textAlign: 'center', paddingRight: '20px' }}>
              Link
            </th>
          </tr>
        </thead>
        <tbody>

          <tr style={{ borderBottom: '1px solid grey' }}>
            <td>
              <p className="code">
                Fee Structure of the School
              </p>
            </td>
            <td style={{ padding: '20px' }}>
              <Upload accept=" image/*" onChange={async ({ file }) => {
                console.log('target.file', file);
                const storageRef = ref(storage, "result/1.png");

                const uploadTask = uploadBytesResumable(storageRef, file.originFileObj);
                uploadfileFunc(uploadTask, 1);
              }}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>

            </td>
            <td style={{ paddingleft: '20px' }}>
              {tableLinks.fee}
            </td>
          </tr>
          <tr style={{ borderBottom: '1px solid grey' }}>
            <td>
              <p className="code">
                Annual Academic Calender
              </p>
            </td>
            <td style={{ padding: '20px' }}>
              <Upload accept=" image/*,.pdf" onChange={({ file }) => {
                // console.log('target.file', target.file);
                // console.log('file', target.file);
                const storageRef = ref(storage, 'result/2.png');

                const uploadTask = uploadBytesResumable(storageRef, file.originFileObj);
                uploadfileFunc(uploadTask, 2);
              }}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>

            </td>
            <td style={{ paddingleft: '20px' }}>
              {tableLinks.calender}
            </td>
          </tr>
          <tr style={{ borderBottom: '1px solid grey' }}>
            <td>
              <p className="code">
                List of School Management Committee (SMC)
              </p>
            </td>
            <td style={{ padding: '20px' }}>
              <Upload accept=" image/*,.pdf" onChange={({ file }) => {
                const storageRef = ref(storage, 'result/3.png');

                const uploadTask = uploadBytesResumable(storageRef, file.originFileObj);
                uploadfileFunc(uploadTask, 3);
              }}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>

            </td>
            <td style={{ paddingleft: '20px' }}>
              {tableLinks.smc}
            </td>
          </tr>
          <tr style={{ borderBottom: '1px solid grey' }}>
            <td>
              <p className="code">
                List of Parents Teachers association(PTA) Members
              </p>
            </td>
            <td style={{ padding: '20px' }}>
              <Upload accept=" image/*,.pdf" onChange={({ file }) => {
                // console.log('target.file', target.file);
                const storageRef = ref(storage, 'result/4.png');

                const uploadTask = uploadBytesResumable(storageRef, file.originFileObj);
                uploadfileFunc(uploadTask, 4);
              }}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>

            </td>
            <td style={{ paddingleft: '20px' }}>
              {tableLinks.pta}
            </td>
          </tr>
          <tr style={{ borderBottom: '1px solid grey' }}>
            <td>
              <p className="code">
                Last Three-Years Results of the Board Examination as per Applicability
              </p>
            </td>
            <td style={{ padding: '20px' }}>
              <Upload accept=" image/*,.pdf" onChange={({ file }) => {
                const storageRef = ref(storage, 'result/5.png');

                const uploadTask = uploadBytesResumable(storageRef, file.originFileObj);
                uploadfileFunc(uploadTask, 5);
              }}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>

            </td>
            <td style={{ paddingleft: '20px' }}>
              {tableLinks.result}
            </td>
          </tr>
        </tbody>
      </table>
      <br/>
      <div style={{width: '100%', height: 1, background: 'gray'}} />
      <h1>Class 10 Data</h1>
      <Button style={{margin: '20px'}} onClick={() => {
        console.log('hello')
        setClass10([
          ...class10,
          {
            Sno: '',
            year: '',
            registedStudent: '',
            studentpassed: '',
            passpercent: '',
            remark: '',
          }
        ])
      }} type="primary" shape="round">
        Add row
      </Button>
      <Button style={{ margin: '20px' }} onClick={() => {
        setClass10((prevState) => {
          console.log(prevState)
          prevState.pop();
          console.log(prevState)
          return [...prevState]
        })
      }} type="primary" shape="round">
        delete row
      </Button>
      <table >
        <thead style={{ borderBottom: '1px solid gray' }} >

          <tr>
            <th style={{ textAlign: 'center', }}>
              S.No
            </th>
            <th style={{ textAlign: 'center', }}>
              Year
            </th>
            <th style={{ textAlign: 'center', paddingRight: '20px' }}>
              No Of Registered
            </th>
            <th style={{ textAlign: 'center', paddingRight: '20px' }}>
              No. of Student Passed
            </th>
            
            <th style={{ textAlign: 'center', paddingRight: '20px' }}>
              Pass Percentage
            </th>
            <th style={{ textAlign: 'center', paddingRight: '20px' }}>
              Remarks
            </th>
            
          </tr>
        </thead>
        <tbody>
            {
              class10.map((data, i)=>{
                return (
                  <tr style={{ borderBottom: '1px solid grey' }}>
                    <td>
                      <Input style={{ margin: '10px', width: '60px'}} placeholder={'Sno'} onChange={({target}) => {
                        setClass10((prevState) => {
                          prevState[i].Sno = target.value
                          return [...prevState]
                        })
                      }} value={data.Sno}  />
                    </td>
                    <td>
                      <Input style={{ margin: '10px', width: '160px' }} placeholder={'year'}   onChange={({ target }) => {
                        setClass10((prevState) => {
                          prevState[i].year = target.value
                          return [...prevState]
                        })
                      }} value={data.year} />
                      {/* {data.year} */}
                    </td>
                    <td>
                      <Input style={{ margin: '10px', width: '160px' }} placeholder={'register Student'}  onChange={({ target }) => {
                        setClass10((prevState) => {
                          prevState[i].registedStudent = target.value
                          return [...prevState]
                        })
                      }} value={data.registedStudent} />
                      {/* {data.registedStudent} */}
                    </td>
                    <td>
                      <Input style={{ margin: '10px', width: '160px' }} placeholder={'StudentPassed'}  onChange={({ target }) => {
                        setClass10((prevState) => {
                          prevState[i].studentpassed = target.value
                          return [...prevState]
                        })
                      }} value={data.studentpassed} />
                      {/* {data.studentpassed} */}
                    </td>
                    <td>
                      <Input style={{ margin: '10px', width: '160px' }} placeholder={'pass percent'}  onChange={({ target }) => {
                        setClass10((prevState) => {
                          prevState[i].passpercent = target.value
                          return [...prevState]
                        })
                      }} value={data.passpercent} />
                      {/* {data.passpercent} */}
                    </td>
                    <td>
                      <Input style={{ margin: '10px', width: '160px' }} placeholder={'remark'}  onChange={({ target }) => {
                        setClass10((prevState) => {
                          prevState[i].remark = target.value
                          return [...prevState]
                        })
                      }} value={data.remark} />
                      {/* {data.remark} */}
                    </td>
                  </tr>
                )
              })
            }
        </tbody>
        
      </table>
      <Button style={{ margin: '20px' }} type="ghost" onClick={() => {
        console.log(class10);
        
        const listref = dbref(database, 'resultlist10')
        const newPostRef = listref;
        set(newPostRef, class10)
        toast.dark('Uploading 10th Data')
      }} >
        Upload Data
      </Button>
      <div style={{width: '100%', height: 1, background: 'gray'}} />
      <h1>Class 12 Data</h1>
      <Button style={{margin: '20px'}} onClick={() => {
        console.log('hello')
        setClass12([
          ...class12,
          {
            Sno: '',
            year: '',
            registedStudent: '',
            studentpassed: '',
            passpercent: '',
            remark: '',
          }
        ])
      }} type="primary" shape="round">
        Add row
      </Button>
      <Button style={{ margin: '20px' }} onClick={() => {
        setClass12((prevState) => {
          console.log(prevState)
          prevState.pop();
          console.log(prevState)
          return [...prevState]
        })
      }} type="primary" shape="round">
        delete row
      </Button>
      <table >
        <thead style={{ borderBottom: '1px solid gray' }} >

          <tr>
            <th style={{ textAlign: 'center', }}>
              S.No
            </th>
            <th style={{ textAlign: 'center', }}>
              Year
            </th>
            <th style={{ textAlign: 'center', paddingRight: '20px' }}>
              No Of Registered
            </th>
            <th style={{ textAlign: 'center', paddingRight: '20px' }}>
              No. of Student Passed
            </th>
            
            <th style={{ textAlign: 'center', paddingRight: '20px' }}>
              Pass Percentage
            </th>
            <th style={{ textAlign: 'center', paddingRight: '20px' }}>
              Remarks
            </th>
            
          </tr>
        </thead>
        <tbody>
            {
              class12.map((data, i)=>{
                return (
                  <tr style={{ borderBottom: '1px solid grey' }}>
                    <td>
                      <Input style={{margin: '10px', width: '60px'}} placeholder={'Sno'} onChange={({target}) => {
                        setClass12((prevState) => {
                          prevState[i].Sno = target.value
                          return [...prevState]
                        })
                      }} value={data.Sno}  />
                    </td>
                    <td>
                      <Input style={{ margin: '10px', width: '160px' }} placeholder={'year'}   onChange={({ target }) => {
                        setClass12((prevState) => {
                          prevState[i].year = target.value
                          return [...prevState]
                        })
                      }} value={data.year} />
                      {/* {data.year} */}
                    </td>
                    <td>
                      <Input style={{ margin: '10px', width: '160px' }} placeholder={'register Student'}  onChange={({ target }) => {
                        setClass12((prevState) => {
                          prevState[i].registedStudent = target.value
                          return [...prevState]
                        })
                      }} value={data.registedStudent} />
                      {/* {data.registedStudent} */}
                    </td>
                    <td>
                      <Input style={{ margin: '10px', width: '160px' }} placeholder={'StudentPassed'}  onChange={({ target }) => {
                        setClass12((prevState) => {
                          prevState[i].studentpassed = target.value
                          return [...prevState]
                        })
                      }} value={data.studentpassed} />
                      {/* {data.studentpassed} */}
                    </td>
                    <td>
                      <Input style={{ margin: '10px', width: '160px' }} placeholder={'pass percent'}  onChange={({ target }) => {
                        setClass12((prevState) => {
                          prevState[i].passpercent = target.value
                          return [...prevState]
                        })
                      }} value={data.passpercent} />
                      {/* {data.passpercent} */}
                    </td>
                    <td>
                      <Input style={{ margin: '10px', width: '160px' }} placeholder={'remark'}  onChange={({ target }) => {
                        setClass12((prevState) => {
                          prevState[i].remark = target.value
                          return [...prevState]
                        })
                      }} value={data.remark} />
                      {/* {data.remark} */}
                    </td>
                  </tr>
                )
              })
            }
        </tbody>
        
      </table>
      <Button style={{ margin: '20px' }} type="ghost" onClick={() => {
        console.log(class12);
        const listref =  dbref(database, 'resultlist12')
        const newPostRef = listref;
        set(newPostRef, class12)
        toast.dark('Uploading 12th Data')
      }} >
        Upload Data
      </Button>
      <ToastContainer />
    </Container>
  )
}
export default ResultandAcademic;