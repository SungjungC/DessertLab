import React,{Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView
} from "react-native";

class Home extends Component{
  render(){
    return(
      <ScrollView>
      <View style={styles.container}>
      </View>
      </ScrollView>
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
