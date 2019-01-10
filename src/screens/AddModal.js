import React, {Component} from 'react';
import{
    AppRegistry,FlatList,StyleSheet,Text,View,Image, Alert,
    Platform, TouchbleHighlight,Dimensions,
    TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

var screen = Dimensions.get('window');
export default class AddModal extends Component{
    constructor(props){
        super(props);
    }
    showAddModal = () =>{
        this.refs.myModal.open();
    }
    render(){
        return (
            <Modal
                ref={"myModal"}
                style={{
                    justifyContent:'center',
                    borderRadius: Platform.OS === 'ios'?30:0,
                    shadowRadius:10,
                    width: screen.width,
                    height: 200,
                    backgroundColor :'#FCF39E'
                }}
                position='center'
                backdrop={true}
                // onClosed={() => {
                //     alert("Modal closed");
                // }}
            >
            <View style={styles.km_message}>
                <Text>반경 선택</Text>
            </View>
            </Modal>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    km_message:{
        alignItems: 'center',
        justifyContent: 'center'
    }
  
  
  });