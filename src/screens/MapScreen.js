import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import MapView from 'react-native-maps';


class MapScreen extends Component {

    render() {
        return (
            <View style={styles.container}>

                <MapView
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
        );
    }
}
export default MapScreen;


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
});



{/* <Marker

          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          title ={'title'}
          description={'description'}
          /> */}


{/* <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBFGBtOjUzcow24lHquTZZ_s53QuLPq4qM&callback=initMap"
  type="text/javascript"></script> */}
