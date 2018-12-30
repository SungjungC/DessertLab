import React,  { Component } from 'react';
import { View , Text, StyleSheet, TextInput, TouchableOpacity , StatusBar, TouchableHighlight} from 'react-native';

export default class LoginForm extends Component {


    render() {
        return (

            <View style={styles.container}>
            <StatusBar
                barStyle="light-content" // 상태표시줄 색깔
                />

                <TextInput
                placehoder = "username or email"
                placeholderTextColor ="rgba(255,255,255,0.7)"
                returnKeyType = "next" // return을 바꿔줌
                onSubmitEditing ={() => this.passwordInput.focus()} // 패스워드로 넘어가도록
                keyboardType= "email-address"
                autoCapitalize ="none"
                autoCorrect={false} 
                style={styles.input} 
                 />
                <TextInput
                 placehoder = "password"
                 placeholderTextColor ="rgba(255,255,255,0.7)"
                 returnKeyType = "go"
                 secureTextEntry
                 style={styles.input}  
                 ref={(input) => this.passwordInput = input} // 여기로 로그인에서 next누르면 넘어가도록
                 />
                       
                    
                 <TouchableHighlight style ={styles.buttonContainer}>
                    {/* onPress={()=>{this.main.bind(this)}}  */}
                    <Text style={styles.buttonText}>LOGIN</Text>
                 </TouchableHighlight>


                {/* <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}> LOGIN </Text>
                </TouchableOpacity > */}
            </View>
        );
    }
}


const styles = StyleSheet.create({

container :{
    padding :20 // 양쪽 사이드 띄우기?
},
    input : {
        height : 40,
        backgroundColor: 'rgba(255,255,255,0.7)',
        marginBottom: 20,
        color :'#FFF',
        paddingHorizontal : 10
    },
    buttonContainer :{
        backgroundColor : '#0a3d62',
        paddingVertical : 15

    },

    buttonText: {
        textAlign : 'center',
        color : '#FFFFFF',
        fontWeight : '700'
    }

});   