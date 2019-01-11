import React,{Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";

import { Input} from 'react-native-elements';


class Search extends Component{
  static navigationOptions = {
    tabBarLabel:'Search'
  }
  render(){
    return(
      <View style={styles.container}>
          <Input
            containerStyle={styles.inputContainerStyle}
            placeholder="검색어를 입력하세요"
            returnKeyType="search"
          />
      </View>
    );
  }
}
export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inputContainerStyle: {
    width: '90%',
    padding: 10,
  },
});
