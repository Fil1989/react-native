
import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Button } from 'react-native';
import image from './assets/back-image.jpg'
export default function App() {
  const [text, onChangeText] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
      <Text style={styles.moto}>Never give up!</Text>
      <View style={styles.form}>
        <View style={styles.field}>
          <Text style={styles.inputTitle}>Email</Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        textAlign={'center'}
        placeholder="useless placeholder"
        // secureTextEntry={true}
      />
        </View>
        <View style={styles.field}>
          <Text style={styles.inputTitle}>Password</Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        textAlign={'center'}
        placeholder="useless placeholder"
        secureTextEntry={true}
      />
        </View>
     <Button title='Sign In' />
      </View>
     
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  moto: {
    color: 'tomato', 
    fontSize: 29, 
    fontWeight: 'bold',
    marginBottom:20
    },
    image: {
      flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'cover'
    },
    form: {
      marginHorizontal: 40,
    },
    field: {
      marginBottom:10
    },
    input: { 
      height: 40,
      width: 300,
marginTop:5,
      borderWidth: 2,
      padding: 10,
      borderRadius: 5,
      borderColor: 'gray',
    },
    inputTitle: {
    }
});
