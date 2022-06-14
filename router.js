import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreateScreen from './screens/mainScreen/CreateScreen';
import PostScreen from './screens/mainScreen/PostScreen';
import ProfileScreen from './screens/mainScreen/ProfileScreen';

const AuthStack = createStackNavigator();

const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
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
  return <MainTab.Navigator screenOptions={{
    headerShown: false
  }}>
  <MainTab.Screen name="Create" component={CreateScreen} />
  <MainTab.Screen name="Post" component={PostScreen} />
  <MainTab.Screen name="Profile" component={ProfileScreen} />
</MainTab.Navigator>

}