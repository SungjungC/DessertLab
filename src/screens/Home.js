import React,{Component} from "react";
import {
  View,
  SafeAreaView,
  Image,
  Dimensions,
  StatusBar,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";

import GridView from 'react-native-super-grid';
import { Button } from 'react-native-elements';
import {Navigation} from 'react-native-navigation';


const SCREEN_WIDTH = Dimensions.get('window').width;


class CustomButton extends Component {
  
  constructor() {
    super();

    this.state = {
      selected: false,
    };
  }

  componentDidMount() {
    const { selected } = this.props;

    this.setState({
      selected,
    });
  }

  render() {
    const { title } = this.props;
    const { selected } = this.state;

    return (
      <Button
        title={title}
        titleStyle={{ fontSize: 15, color: 'white', fontFamily: 'regular' }}
        buttonStyle={
          selected
            ? {
                backgroundColor: 'rgba(213, 100, 140, 1)',
                borderRadius: 100,
                width: 127,
              }
            : {
                borderWidth: 1,
                borderColor: 'white',
                borderRadius: 30,
                width: 127,
                backgroundColor: 'transparent',
              }
        }
        containerStyle={{ marginRight: 10 }}
        onPress={() => this.setState({ selected: !selected })}
      />
    );
  }
}


class Home extends Component{

  goToScreen = (screenName) =>{
    Navigation.push(this.props.componentId,{
      component: {
        name: screenName
      }
    })
  }


  render(){

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

    return(

      
      <ScrollView>
      {/* <View style={styles.container}> */}


      <View style={{ flex: 1, width: SCREEN_WIDTH, marginTop: 20 }}>
                  
                  <ScrollView
                    style={{ flex: 1 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                  >
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'column',
                        height: 170,
                        marginLeft: 40,
                        marginRight: 10,
                      }}
                    >
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                        <CustomButton title="Philosophy" selected={true} />
                        <CustomButton title="Sport" selected={true} />
                        <CustomButton title="Swimming" selected={true} />
                        <CustomButton title="Religion" selected={true} />
                      </View>

                      <View style={{ flex: 1, flexDirection: 'row' }}>
                        <CustomButton title="Music" selected={true} />
                        <CustomButton title="Soccer" selected={true} />
                        <CustomButton title="Radiohead" selected={true} />
                        <CustomButton title="Micheal Jackson" selected={true} />
                      </View>

                      <View style={{ flex: 1, flexDirection: 'row' }}>
                        <CustomButton title="Travelling" selected={true} />
                        <CustomButton title="Rock'n'Roll" selected={true} />
                        <CustomButton title="Dogs" selected={true} />
                        <CustomButton title="France" selected={true} />
                      </View>

                    </View>

                  </ScrollView>


                </View>



      <GridView
        itemDimension={130}
        items={items}
        style={styles.gridView}
        renderItem={item => (
          // <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <View>
           <TouchableOpacity
         style={[styles.itemContainer, { backgroundColor: item.code }]}
        //  onPress={()=> this.goToScreen('ScrollViewP')}
        >
        </TouchableOpacity>
          </View>
        )}
      />

      {/* </View> */}
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
  },
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