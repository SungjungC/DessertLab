import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  Image,
  ListView
} from "react-native";

class ScrollViewP extends Component {


  render() {

    const items = [
      { name: 'TURQUOISE', code: '#1abc9c' }, { name: 'EMERALD', code: '#2ecc71' },
      { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
      { name: 'WET ASPHALT', code: '#34495e' }, { name: 'GREEN SEA', code: '#16a085' },
      { name: 'NEPHRITIS', code: '#27ae60' }, { name: 'BELIZE HOLE', code: '#2980b9' },
      { name: 'WISTERIA', code: '#8e44ad' }, { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
      { name: 'SUN FLOWER', code: '#f1c40f' }, { name: 'CARROT', code: '#e67e22' },
      { name: 'ALIZARIN', code: '#e74c3c' }, { name: 'CLOUDS', code: '#ecf0f1' },
      { name: 'CONCRETE', code: '#95a5a6' }, { name: 'ORANGE', code: '#f39c12' },
      { name: 'PUMPKIN', code: '#d35400' }, { name: 'POMEGRANATE', code: '#c0392b' },
      { name: 'SILVER', code: '#bdc3c7' }, { name: 'ASBESTOS', code: '#7f8c8d' },
    ];



    return (
      <View>

        <View style={styles.title}>
          <Text style={styles.text}>
            practice !!
              </Text>
        </View>


        <View style={{ height: 130, marginTop: 550 }}>
          
          <ScrollView
            horizontal ={true}
            showsHorizontalScrollIndicator= {false}>

            <View style ={{height :100, width :200, marginLeft:20, borderWidth : 0.5, borderColor:'#ddddd'}}>
              <View style ={{flex : 2}}>
              </View>
              <View style ={{flex : 1, paddingLeft :10}}>
              <Text>1</Text>
              </View>
            </View>
            
            <View style ={{height :100, width :200, marginLeft:20, borderWidth : 0.5, borderColor:'#ddddd'}}>
              <View style ={{flex : 2}}>
              </View>
              <View style ={{flex : 1, paddingLeft :10}}>
              <Text>2</Text>
              </View>
            </View>

            <View style ={{height :100, width :200, marginLeft:20, borderWidth : 0.5, borderColor:'#ddddd'}}>
              <View style ={{flex : 2}}>
              </View>
              <View style ={{flex : 1, paddingLeft :10}}>
              <Text>3</Text>
              </View>
            </View>
          
          </ScrollView>
        
        </View>

      </View>
    );
  }
}
export default ScrollViewP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 20
  },
  title: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,

  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 20,
    height: 30,
    // marginBottom: 50
  }
});
