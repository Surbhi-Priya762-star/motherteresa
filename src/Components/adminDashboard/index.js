import { Layout, Menu, Breadcrumb, Col, Row } from 'antd';
import { MenuItem } from 'rc-menu';
import React from 'react';
import { useHistory } from 'react-router';
import BasicDetails from './basicDetails';
import Schoolinfra from './schoolInfra';
import ResultandAcademic from './resultandAcademic';
import StaffTeaching from './staffteaching';
import DocumentDetails from './document';
const  { Header, Sider,  Footer, Content } = Layout;

const AdminDashboard = () => {
  const history =  useHistory();
  const [menuIndex, setMenuIndex] = React.useState(2);
  const MenuSlider = () => {
    switch (menuIndex) {
      case 1: return <BasicDetails />
      case 2: return <DocumentDetails />
      case 3: return <ResultandAcademic/>
      case 4: return  <Schoolinfra/>
      case 5: return <StaffTeaching/>
      default : return  <BasicDetails />
    }
  }
  return <Layout>
    <Col  style={{ width: '100%', height: '100vh' }} >
      <Header className="custom1">
        <img onClick={() => { history.push('/')}} width="50px" height="30px" src="/Images/logo.png" />
      </Header>
      <Row>
        <Col style={{ width: '15%', height: '80vh',}}>
          <Menu theme="dark" defaultSelectedKeys={['1']} >
            <MenuItem onClick={() => { setMenuIndex(1) }} key={1}>
              basic Details
            </MenuItem>
            <MenuItem onClick={() => { setMenuIndex(2) }} key={2}>
              Documents and Information
            </MenuItem>
            <MenuItem onClick={() => { setMenuIndex(3) }} key={3}>
              Results and Academics
            </MenuItem>
            <MenuItem onClick={() => { setMenuIndex(4) }} key={4}>
              Staff Teaching
            </MenuItem>
            <MenuItem onClick={() => { setMenuIndex(5) }} key={5}>
              School Infrastructure
            </MenuItem>
          </Menu>
        </Col>
        <Col style={{flex: 1,padding:'40px', backgroundColor: 'white'}}>
          {MenuSlider()}
        </Col>
      </Row>
      
      <Footer style={{maxHeight: '12vh'}}>
        Mothertresa.in
      </Footer>
    </Col>
  </Layout>
}
export default AdminDashboard;
