import React from 'react';
import { MapView } from 'expo';
import IconSLI from 'react-native-vector-icons/SimpleLineIcons';
import styles from './styles';

const Location = () => (
  <MapView
    style={styles.containerMap}
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
      <IconSLI name="location-pin" size={20} color="white" />
    </MapView.Marker>
  </MapView>
);

export default Location;
