import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { Constants, Location, Permissions, MapView } from 'expo';
import IconSLI from 'react-native-vector-icons/Entypo';
import styless from './styles';

export default class CurrentLocation extends Component {
  state = {
    location: null,
    lat: null,
    long: null,
    errorMessage: null,
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage:
          'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({
      location: location,
      lat: location.coords.latitude,
      long: location.coords.longitude,
    });
  };

  render() {
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }

    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>{text}</Text>
        {this.state.lat || this.state.long ? (
          <MapView
            style={styless.containerMap}
            pointerEvents="none"
            region={{
              latitude: this.state.lat,
              longitude: this.state.long,
              latitudeDelta: 0.00922,
              longitudeDelta: 0.00421,
            }}
          >
            <MapView.Marker
              key={0}
              coordinate={{
                latitude: this.state.lat,
                longitude: this.state.long,
              }}
            >
              <IconSLI name="location-pin" size={20} color="red" />
            </MapView.Marker>
          </MapView>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});
