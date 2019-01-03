import React,{Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";

class Best extends Component{
  static navigationOptions = {
    tabBarLabel:'Best'
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>Best</Text>
      </View>
    );
  }
}
export default Best;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
