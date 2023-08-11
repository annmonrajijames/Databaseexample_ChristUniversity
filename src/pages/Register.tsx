import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Register: React.FC = () => {
    const [username, setUsername]=useState('')
    const [password,setPassword] = useState('')  
    const [cpassword,setcPassword] = useState('')

    function registerUser()
    {
        console.log(username,password)
    }
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Ionic Login Page </IonTitle>
          </IonToolbar>
        </IonHeader>
       <IonContent className="ion-padding">
        <IonInput placeholder='username' onIonChange={(e:any)=>setUsername(e.target.value)}/>
        <IonInput type='password' placeholder='Password'   onIonChange={(e:any)=>setPassword(e.target.value)}/>
        <IonInput type='password' placeholder='Confirm Password' onIonChange={(e:any)=>setcPassword(e.target.value)}/>
        <IonButton onClick={registerUser}> Login</IonButton>
        <p>Already if have an account ?<Link to="/Login">Login</Link></p>

       
        </IonContent>
    
      </IonPage>
    );
  };
  
  export default Register;