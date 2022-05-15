
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import image from '../../assets/back-image.jpg';

export default function RegisterScreen({navigation}) {
const initialState={
  name:'',
  email:'',
  password:'',
}
const [state, setState] = React.useState(initialState);
  const [key, setKey] = React.useState(false);
const hideKeyboard = ()=>{
  setKey(false);
  Keyboard.dismiss();
}
const sendData = ()=>{
  setKey(false);
  Keyboard.dismiss();
  console.log(state);
  setState(initialState);
}
  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
    <View style={styles.container}>
      <ImageBackground source={image} style={{...styles.image, justifyContent: key?'flex-end':'center'}} resizeMode='cover'
>

      <Text style={styles.moto}>Please, sign up!</Text>
      
      <View style={{...styles.form, marginBottom: key? 10 : 0,
}}>
         <View style={styles.field}>
          <Text style={styles.inputTitle}>Name</Text>
        <TextInput
        style={styles.input}
        onChangeText={(value)=>setState((previousState)=>({...previousState, name:value}))}
        value={state.name}
        textAlign={'center'}
        placeholder="add your name"
        onFocus={()=>{setKey(true)}}
      />
        </View>
        <View style={styles.field}>
          <Text style={styles.inputTitle}>Email</Text>
        <TextInput
        style={styles.input}
        onChangeText={(value)=>setState((previousState)=>({...previousState, email:value}))}
        value={state.email}
        textAlign={'center'}
        placeholder="useless placeholder"
        onFocus={()=>{setKey(true)}}
      />
        </View>
   
        <View style={styles.field}>
          <Text style={styles.inputTitle}>Password</Text>
        <TextInput
        style={styles.input}
        onChangeText={(value)=>setState((previousState)=>({...previousState, password:value}))}
        value={state.password}
        textAlign={'center'}
        placeholder="useless placeholder"
        secureTextEntry={true}
        onFocus={()=>{setKey(true)}}

      />
        </View>
     <TouchableOpacity 
     style={styles.btn} 
     activeOpacity={0.6} 
     onPress={sendData}>
       <Text>Sign in</Text> 
     </TouchableOpacity>

      </View>
      <Text style={styles.auth_btn}
        onPress={() => navigation.navigate('Login')}
      >Login</Text>
      </ImageBackground>
    </View>
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontSize: 15,
        lineHeight: 0.8,
  },
  moto: {
    color: 'tomato',
    fontSize: 59, 
    fontFamily: 'Festive-Regular',
    textAlign: 'center'
    },
    image: {
      flex: 1,
    },
    form: {
      marginHorizontal: 40,
    },
    field: {
      marginBottom:10
    },
    input: { 
      height: 40,
      width: '100%',
marginTop:5,
      borderWidth: 2,
      padding: 10,
      borderRadius: 5,
      borderColor: 'gray',
    },
    inputTitle: {
    },
    btn:{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: `#00ffff`,
      height:40,
      textAlign: 'center',
      borderRadius: 5,
marginHorizontal:20,
marginTop: 20,
    },
    auth_btn: {
      marginHorizontal: 40,
      color: 'blue',
      fontSize: 20,
      textAlign: 'center',
      margin: 10
    }
});
