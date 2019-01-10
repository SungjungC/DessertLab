
import React, { Component } from "react";
import {
  FlatList,
  Alert,
  Text,
  TextInput,
  StyleSheet,
  View,
  Button,
  ListView,
  Image,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import { Navigation } from 'react-native-navigation';

class Best extends Component {
  constructor() {
    super()
    this.state = {
      dataSource: [],
      isLoading: true
    }
  }
  renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={{flex:1, flexDirection:'row', marginBottom:3}}>
        <Image style={{width:100, height:80, margin:5 }}
          source={{ uri: item.image }} />
        <View style={{flex:1, jstifyContent:'center',marginLeft:5}}>
          <Text style={{fontSize:18, color:'green',marginBottom:15}}>
            {item.book_title}
          </Text>
          <Text style={{fontSize:16, color:'red'}}>
            {item.author}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  renderSeparator = ()=>{
    return(
      <View 
        style={{height: 1,width: '100%',backgroundColor:'black'}}>

      </View>
    )
  }
  componentDidMount() {
    const url = 'http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1'
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.book_array,
          isLoading:false
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  static navigationOptions = {
    tabBarLabel: 'Best'
  }
  goToScreen = (screenName) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screenName
      }
    })
  }
  render() {
    return (
      this.state.isLoading
      ?
      <View style={{flex: 1, justifyContent: 'center',
      alignItems:'center'}}>
       
      </View>
      :
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',

  },
});

export default Best;
