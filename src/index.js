import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from './App';
import AboutUs from './Components/AboutUs';
import AimsandObjective from './Components/AimsandObjective';
import Directormessage from './Components/Directormessage';
import Principaldesk from './Components/Principaldesk';
import Achievements from './Components/Achievements';
import Activities from './Components/Achievements';
import Admission from './Components/Admission';
import Career from './Components/Career';
import Contact from './Components/Contact';
import Download from './Components/Contact';
import Faculty from './Components/Faculty';
import Holiday from './Components/Holiday';
import NCC from './Components/NCC';
import PrintMedia from './Components/PrintMedia';
import Snapshots from './Components/Snapshots';
import SocialMedia from './Components/SocialMedia';
import Syllabus from './Components/Syllabus';
import Updates from './Components/Updates';
import Videos from './Components/Videos';
import Infrastucture from './Components/Infrastructure';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <Router>
      
      <Switch>
       
        <Route exact path="/" component={App} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/AimsandObjective" component={AimsandObjective} />
        <Route path="/Directormessage" component={Directormessage} />
        <Route path="/Principaldesk" component={Principaldesk} />
        <Route path="/Achievements"  component={Achievements}/>
        <Route path="/Activities"   component={Activities}/>
        <Route path="/Admission" component={Admission}/>
        <Route path="/Career" component={Career}/>
        <Route path="/Contact" component={Contact} />
        <Route path="/Download" component={Download} />
        <Route path= "/Faculty" component={Faculty} />
        <Route path="/Infrastucture" component={Infrastucture}/>
        <Route path="/Holiday" component={Holiday} />
        <Route path="/NCC" component={NCC} />
        <Route path="/PrintMedia" component={PrintMedia} />
        <Route path="/Snapshots" component={Snapshots}/>
        <Route path="/SocialMedia" component={SocialMedia}/>
        <Route path="/Syllabus" component={Syllabus}/>
        <Route path="/Updates" component={Updates}/>
        <Route path="/Videos" Componenrt={Videos}/>

        </Switch>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
