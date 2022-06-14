
import React from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { useRoute } from './router';

const loadApplication = async ()=>{
  await Font.loadAsync({'Festive-Regular': require('./assets/fonts/Festive-Regular.ttf')});
}


export default function App() {

  const [isReady, setIsReady] = React.useState(false);

if(!isReady){
  return <AppLoading startAsync={loadApplication}
  onFinish={() => setIsReady(true)} 
  onError={console.warn}
  />
}
const router = useRoute({});
  return (
    <NavigationContainer>
    {router}
    </NavigationContainer>
  );
}
