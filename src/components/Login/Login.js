import React, {Component } from 'react'
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native'
import LoginForm from './LoginForm';

export default class Login extends Component {
    render() {
        return(
          <KeyboardAvoidingView behavior="padding" style ={styles.container}>
          
             <View style={styles.logoContainer}>
             <Image 
                style={styles.logo}
                source={require('../../images/Dlablogo.png')} 
             />

                <Text style={styles.title}>Dessert Laboratory</Text>
             </View>
             <View style={styles.formContainer}>
             <LoginForm />
             </View>
            </KeyboardAvoidingView>
        );

    } 
}

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
    }
});