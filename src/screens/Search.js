import React,{Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";

class Search extends Component{
  static navigationOptions = {
    tabBarLabel:'Search'
  }
  render(){
    return(
      <View style={styles.container}>
        <Text>Search</Text>
      </View>
    );
  }
}
export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
