import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
 

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Login Page </IonTitle>
        </IonToolbar>
      </IonHeader>
     <IonContent className="ion-padding">
      <IonButton routerLink="/login" color="primary">Login</IonButton>
      <IonButton routerLink="/register" color="secondary">Register</IonButton>
      <IonButton routerLink="/login1" color="secondary">Login1</IonButton>
      </IonContent>
  
    </IonPage>
  );
};

export default Home;