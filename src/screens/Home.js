import React,{Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";




class Home extends Component{
  static navigationOptions = {
    tabBarLabel:'Home'
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
