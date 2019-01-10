import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  Image,
  Dimensions,
  StatusBar,
  Text,
  StyleSheet,
  Button,
  Modal,
  TouchableHighlight,
  Alert,
  ScrollView,
  TouchableOpacity
} from "react-native";
import AddModal from './AddModal';
import RNPickerSelect from 'react-native-picker-select';
import { Navigation } from 'react-native-navigation';
import GridView from 'react-native-super-grid';
import { Button } from 'react-native-elements';
import {Navigation} from 'react-native-navigation';


const SCREEN_WIDTH = Dimensions.get('window').width;



const width = '100%';

// class CustomButton extends Component {
  
//   constructor() {
//     super();

//     this.state = {
//       selected: false,
//     };
//   }

//   componentDidMount() {
//     const { selected } = this.props;

//     this.setState({
//       selected,
//     });
//   }

//   render() {
//     const { title } = this.props;
//     const { selected } = this.state;

//     return (
//       <Button
//         title={title}
//         titleStyle={{ fontSize: 15, color: 'white', fontFamily: 'regular' }}
//         buttonStyle={
//           selected
//             ? {
//                 backgroundColor: 'rgba(213, 100, 140, 1)',
//                 borderRadius: 100,
//                 width: 127,
//               }
//             : {
//                 borderWidth: 1,
//                 borderColor: 'white',
//                 borderRadius: 30,
//                 width: 127,
//                 backgroundColor: 'transparent',
//               }
//         }
//         containerStyle={{ marginRight: 10 }}
//         onPress={() => this.setState({ selected: !selected })}
//       />
//     );
//   }
// }



class Home extends Component {
  constructor(props) {
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
  _onPressAdd() {
    this.refs.addModal.showAddModal();
  }
  static navigationOptions = {
    tabBarLabel: 'Home'
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
  goToScreen = (screenName) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screenName
      }
    })
  }

  render() {
    // const items = [
    //   { name: 'TURQUOISE', code: '#1abc9c' }, { name: 'EMERALD', code: '#2ecc71' },
    //   { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
    //   { name: 'WET ASPHALT', code: '#34495e' }, { name: 'GREEN SEA', code: '#16a085' },
    //   { name: 'NEPHRITIS', code: '#27ae60' }, { name: 'BELIZE HOLE', code: '#2980b9' },
    //   { name: 'WISTERIA', code: '#8e44ad' }, { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
    //   { name: 'SUN FLOWER', code: '#f1c40f' }, { name: 'CARROT', code: '#e67e22' },
    //   { name: 'ALIZARIN', code: '#e74c3c' }, { name: 'CLOUDS', code: '#ecf0f1' },
    //   { name: 'CONCRETE', code: '#95a5a6' }, { name: 'ORANGE', code: '#f39c12' },
    //   { name: 'PUMPKIN', code: '#d35400' }, { name: 'POMEGRANATE', code: '#c0392b' },
    //   { name: 'SILVER', code: '#bdc3c7' }, { name: 'ASBESTOS', code: '#7f8c8d' },
    // ];

    // return(

      
    //   <ScrollView>
    //   {/* <View style={styles.container}> */}


    //   <View style={{ flex: 1, width: SCREEN_WIDTH, marginTop: 20 }}>
                  
    //               <ScrollView
    //                 style={{ flex: 1 }}
    //                 horizontal
    //                 showsHorizontalScrollIndicator={false}
    //               >
    //                 <View
    //                   style={{
    //                     flex: 1,
    //                     flexDirection: 'column',
    //                     height: 170,
    //                     marginLeft: 40,
    //                     marginRight: 10,
    //                   }}
    //                 >
    //                   <View style={{ flex: 1, flexDirection: 'row' }}>
    //                     <CustomButton title="Philosophy" selected={true} />
    //                     <CustomButton title="Sport" selected={true} />
    //                     <CustomButton title="Swimming" selected={true} />
    //                     <CustomButton title="Religion" selected={true} />
    //                   </View>

    //                   <View style={{ flex: 1, flexDirection: 'row' }}>
    //                     <CustomButton title="Music" selected={true} />
    //                     <CustomButton title="Soccer" selected={true} />
    //                     <CustomButton title="Radiohead" selected={true} />
    //                     <CustomButton title="Micheal Jackson" selected={true} />
    //                   </View>

    //                   <View style={{ flex: 1, flexDirection: 'row' }}>
    //                     <CustomButton title="Travelling" selected={true} />
    //                     <CustomButton title="Rock'n'Roll" selected={true} />
    //                     <CustomButton title="Dogs" selected={true} />
    //                     <CustomButton title="France" selected={true} />
    //                   </View>

    //                 </View>

    //               </ScrollView>


    //             </View>



    //   <GridView
    //     itemDimension={130}
    //     items={items}
    //     style={styles.gridView}
    //     renderItem={item => (
    //       // <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
        
    //        <TouchableOpacity
    //      style={[styles.itemContainer, { backgroundColor: item.code }]}
    //     //  onPress={()=> this.goToScreen('ScrollViewP')}
    //     >
    //     </TouchableOpacity>
    //     )}
    //     />

    //     </ScrollView>
       
    
    
    
    
    return (
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
            title="km" onPress={this._onPressAdd} />
        </View>
        <View style={styles.food_list}>
          <ScrollView>
            {/* <View style={styles.container}> */}
            <GridView
              itemDimension={130}
              items={items}
              style={styles.gridView}
              renderItem={item => (
                // <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
                <View>
                  <TouchableOpacity
                    style={[styles.itemContainer, { backgroundColor: item.code }]}
                    onPress={() => this.goToScreen('SignIn')}
                  >
                  </TouchableOpacity>
                </View>
              )}
            />
            {/* </View> */}
          </ScrollView>
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
    flex: 2,
    //paddingTop: 30,
    backgroundColor: '#FCF39E',
    justifyContent: 'center',
    //paddingHorizontal: 10,
    width,
    flexDirection: 'row'
  },
  food_list: {
    flex:4
  },
  select: {
    width: 100
  },
  // km_button:{
  //   color:'red'
  // }
  gridView: {
    paddingTop: 25,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  }
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
