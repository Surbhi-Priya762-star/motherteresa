import React, {useEffect, useState} from 'react';
import { Form, Button, Container} from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer/Footer';
import {ToastContainer, toast} from 'react-toastify';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

function Adminlogin() {
  const auth  =  getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log('user exist', user, uid)
        // ...
      } else {
        console.log('user logout', user);
        // User is signed out
        // ...
      }
    });
  },[])
    return (
        <div>
            <Header/>
            <Container>
                <div style={{backgroundColor:'gray',height:'600px', borderRadius:'25px',marginTop:'30px'}}>
            <img style={{marginLeft:'430px'}}src="/Images/logo.PNG" alt="career" />
            <Form style={{width:'50%', marginLeft:'260px',marginTop:'60px',fontSize:'20px',fontWeight:'500'}}>
          <Form.Control onChange={({target}) => setEmail(target.value) } style={{marginTop:'20px',height:'70px'}} placeholder="User Name" />
              <Form.Control onChange={({ target }) => setPassword(target.value)} style={{marginTop:'20px',height:'70px'}} placeholder="Password" type="Password" />
    <Button  onClick={() => {
                console.log('<ToastContainer/>', email, password);
      if(email && password) {
        console.log('<ToastContainer/>', email, password);
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('User', user);
            toast.dark('Loged In SuccessFully')
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('error', error, errorMessage )
            toast.dark(errorMessage)
          });
        

      }
    }} variant="primary" type="button" style={{marginTop:'30px',marginLeft:'260px',height:'60px',width:'120px'}}>
    LogIn
  </Button>

    
</Form>

  </div>  
          <ToastContainer />
</Container>       
          
          
          
          
         <Footer/>
            
        </div>
    )
}

export default Adminlogin;
