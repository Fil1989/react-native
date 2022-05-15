
import React from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreateScreen from './screens/mainScreen/CreateScreen';
import PostScreen from './screens/mainScreen/PostScreen';
import ProfileScreen from './screens/mainScreen/ProfileScreen';

const loadApplication = async ()=>{
  await Font.loadAsync({'Festive-Regular': require('./assets/fonts/Festive-Regular.ttf')});
}
const AuthStack = createStackNavigator();

const MainTab = createBottomTabNavigator();

const useRoute = (isAuth) => {
if(!isAuth){
  return <AuthStack.Navigator 
  screenOptions={{
  headerShown: false
}}
>
      <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Registration" component={RegisterScreen} />
  </AuthStack.Navigator> 
}
  return <MainTab.Navigator>
  <MainTab.Screen name="Create" component={CreateScreen} />
  <MainTab.Screen name="Post" component={PostScreen} />
  <MainTab.Screen name="Profile" component={ProfileScreen} />
</MainTab.Navigator>

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

// auth
<AuthStack.Navigator 
    screenOptions={{
    headerShown: false
  }}
  >
        <AuthStack.Screen name="Login" component={LoginScreen} />
          <AuthStack.Screen name="Registration" component={RegisterScreen} />
    </AuthStack.Navigator> 