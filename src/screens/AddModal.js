import React, { Component } from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert,
    Platform, TouchbleHighlight, Dimensions,
    TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import SnapSlider from 'react-native-snap-slider';

var screen = Dimensions.get('window');
export default class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultItem: 2
        }
    }
    showAddModal = () => {
        this.refs.myModal.open();
    }
    sliderOptions = [
        { value: 0, label: '100m' },
        { value: 1, label: '300m' },
        { value: 2, label: '500m' },
        { value: 3, label: '1km' },
        { value: 4, label: '3km' },
    ]
    getInitialState() {
        return {
            defaultItem: 2,
        };
    }

    slidingComplete(itemSelected) {
        console.log("slidingComplete");
    }
    render() {
        return (
            <Modal
                ref={"myModal"}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 0,
                    shadowRadius: 10,
                    width: screen.width,
                    height: 200,
                    backgroundColor: '#FCF39E'
                }}
                position='center'
                backdrop={true}
            // onClosed={() => {
            //     alert("Modal closed");
            // }}
            >
                <View style={styles.container}>
                    <Text style={styles.text}>내 위치에서 검색 반경 선택</Text>
                    <SnapSlider ref="slider" containerStyle={styles.snapsliderContainer} style={styles.snapslider}
                        itemWrapperStyle={styles.snapsliderItemWrapper}
                        itemStyle={styles.snapsliderItem}
                        items={this.sliderOptions}
                        labelPosition="bottom"
                        defaultItem={this.state.defaultItem}
                        onSlidingComplete={this.slidingComplete} />
                    <Text style={styles.text}>반경 {this.sliderOptions[2].label}</Text>
                </View>
            </Modal>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: "stretch",
        justifyContent: "center"
    },
    snapsliderContainer :{
        marginBottom: 10
    },
    text: {
        textAlign: "center",
        fontSize: 20
    },


});