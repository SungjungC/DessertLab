import React,{Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Modal,
  TouchableHighlight, 
  Alert,
} from "react-native";
import AddModal from './AddModal';
import RNPickerSelect from 'react-native-picker-select';
import {Navigation} from 'react-native-navigation';


const width = '100%';

class Home extends Component{
  constructor(props){
    super(props);
    this.inputRefs = {};

    this.state = {
        favColor: '평점순',
        items: [
            {
                label: '평점순',
                value: 'average',
            },
            {
                label: '거리순',
                value: 'distance',
            },
            {
                label: '리뷰순',
                value: 'review',
            },
            {
              label: '추천순',
              value: 'recommand',
          }
        ]
    }   
    this._onPressAdd = this._onPressAdd.bind(this);
  }
  _onPressAdd(){
    this.refs.addModal.showAddModal();
  }
  static navigationOptions = {
    tabBarLabel:'Home'
  }
  componentDidMount() {
    // if the component is using the optional `value` prop, the parent
    // has the abililty to both set the initial value and also update it
    setTimeout(() => {
        this.setState({
            favColor: '평점순',
        });
    }, 1000);
  }
  goToScreen = (screenName) =>{
    Navigation.push(this.props.componentId,{
      component: {
        name: screenName
      }
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.option_container}>
          <View style={styles.select}>
            <RNPickerSelect
                placeholder={{
                    label: '정렬',
                    value: null,
                }}
                items={this.state.items}
                onValueChange={(value) => {
                    this.setState({
                        favColor: value,
                    });
                }}
                onUpArrow={() => {
                    this.inputRefs.name.focus();
                }}
                onDownArrow={() => {
                    this.inputRefs.picker2.togglePicker();
                }}
                style={{ ...pickerSelectStyles }}
                value={this.state.favColor}
                ref={(el) => {
                    this.inputRefs.picker = el;
                }}
            />
          </View>
          <Button style={styles.km_button} 
                title="km" onPress={this._onPressAdd}/>
        </View>
       
        <AddModal ref={'addModal'}></AddModal>
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
  },
  option_container: {
    //paddingTop: 30,
    backgroundColor: '#FCF39E',
    marginBottom:400,
    justifyContent: 'center',
    //paddingHorizontal: 10,
    width,
    height:50,
    flexDirection: 'row'
  },
  select:{
    width:100
  },
  // km_button:{
  //   color:'red'
  // }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
      fontSize: 16,
      paddingTop: 13,
      paddingHorizontal: 10,
      paddingBottom: 12,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      backgroundColor: 'white',
      color: 'black',
  },
});
