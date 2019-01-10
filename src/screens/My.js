import React,{Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";

class My extends Component{
  static navigationOptions = {
    tabBarLabel:'My'
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>My</Text>
      </View>
    );
  }
}
export default My;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
