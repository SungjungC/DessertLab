import React, {Component } from 'react'
import { 
    StyleSheet, 
    View, 
    Image, 
    Text, 
    KeyboardAvoidingView,
    Platform, 
    TextInput,
    TouchableOpacity,
    StatusBar, 
    Button
} from 'react-native'
import {Navigation} from 'react-native-navigation'



 class Login extends Component {

    goToScreen = (screenName) =>{
        Navigation.push(this.props.componentId,{
          component: {
            name: screenName
          }
        })
      }

    render() {
        return(
          <KeyboardAvoidingView behavior="padding" style ={styles.container}>
          
             <View style={styles.logoContainer}>
             <Image 
                style={styles.logo}
                source={require('../images/Dlablogo.png')} 
             />

                <Text style={styles.title}>Dessert Laboratory</Text>
             </View>
             <View style={styles.formContainer}>
             <StatusBar
        barStyle="light-content"
        />
        
        <TextInput
          placeholder="username or email"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          />
        <TextInput
          placeholder="password"
          placeholderTextColor="rgba(255,255,255,0.7)"
          returnKeyType="go"
          secureTextEntry
          style={styles.input}
          ref={(input) => this.passwordInput = input}
          />
         <TouchableOpacity
         style={styles.buttonContiner}
         onPress={()=> this.goToScreen('Home')}>
        <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
             </View>
            </KeyboardAvoidingView>
        );

    } 
}export default Login;

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : '#3c6382'
    },
    logoContainer:{
        backgroundColor : 'transparent',
        alignItems : 'center',
        flex :1,
        justifyContent : 'center'
    },
    logo: {
        width : 170,
        height : 100
    },
    title:{ 
        color :'white',
        width: 160,
        textAlign: 'center',
        opacity :0.9 //불투명
    },
    formContainer:{
        padding: 20
      },
      input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 10
      },
      buttonContiner: {
        backgroundColor: '#2980b9',
        paddingVertical: 15
      },
      buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
      }
});