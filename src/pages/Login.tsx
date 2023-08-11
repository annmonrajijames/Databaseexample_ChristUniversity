import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const login: React.FC = () => {
    const [username, setUsername]=useState('')
    const [password,setPassword] = useState('')  

    function loginUser()
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
        <IonInput type='password' placeholder='Password' onIonChange={(e:any)=>setPassword(e.target.value)}/>
        <IonButton onClick={loginUser}> Login</IonButton>
        <p>Don`t have an account ?<Link to="/Register">Register Here</Link></p>

       
        </IonContent>
    
      </IonPage>
    );
  };
  
  export default login;