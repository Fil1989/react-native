
import React from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const loadApplication = async ()=>{
  await Font.loadAsync({'Festive-Regular': require('./assets/fonts/Festive-Regular.ttf')});
}
const Stack = createStackNavigator();

export default function App() {

  const [isReady, setIsReady] = React.useState(false);

if(!isReady){
  return <AppLoading startAsync={loadApplication}
  onFinish={() => setIsReady(true)} 
  onError={console.warn}
  />
}
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registration" component={RegisterScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
  // <>
  // <RegisterScreen />
  // </>
}
