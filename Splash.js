import React,  { Component } from 'react';
import { View, Text , StyleSheet} from 'react-native';

export default class Splash extends Component {
    render() {
        return (
                                    // 배경 /  flexbox 1  세로 가로
            <View style={styles.wrapper}> 
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>DessertLab </Text>
                </View>
                <View>
                    <Text style={styles.subtitle}>Powered by React Native </Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#f8c291', 
        flex : 1, 
        justifyContent: 'center', 
        alignItems:'center' 
    },
    title :{
        color :'white',
        fontSize :35,
        fontWeight :'bold'
    },
    subtitle :{
        color :'white',
        fontSize :10,
        fontWeight:'200',
        paddingBottom: 20 // 아래서 얼마나 띄우는지

    },
    titleWrapper:{
        flex:1,
        justifyContent: 'center'
    }
});