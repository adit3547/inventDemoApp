import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'react-native-elements';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { ImagePicker, Permissions } from 'expo';
import DefaultImage from '../../../assets/image.png';
import Container from '../../components/Container';
import styles from '../styles';

export default class InventSpesifikasi extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };
  state = {
    image: null,
  };

  /*   selectPicture = async () => {
  //  await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      aspect: 1,
      allowsEditing: true,
    }); 
    let status = 'granted';
    if (status === 'granted' || status === 'Allow') {
//      this.setState({ loading: true });
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: 'Images',
        quality: 0.5,
      });
    if (!pickerResult.cancelledcancelled) {
      this.setState({ image: pickerResult.uri });
    }
  }; */

  takePicture = async () => {
    await Permissions.askAsync(Permissions.CAMERA);
    await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const { cancelled, uri } = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
    });
    if (!cancelled) {
      this.setState({ image: uri });
    }
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <ScrollView style={styles.scrollStyle}>
          <View style={styless.container}>
            <View style={{ width: '85%', marginBottom: 10, marginTop: 10 }}>
              <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'grey' }}>
                Tambahkan Foto Barang
              </Text>
            </View>
            {this.state.image ? (
              <Image style={styless.image} source={{ uri: this.state.image }} />
            ) : (
              <Image style={styless.image} source={DefaultImage} />
            )}
            <View style={styless.row}>
              {/*       <Buttons onPress={this.selectPicture}>Gallery</Buttons> */}
              <Buttons onPress={this.takePicture}>Camera</Buttons>
            </View>
          </View>
        </ScrollView>

        <View style={{ width: '100%', position: 'absolute', bottom: 0 }}>
          <Button
            title="Save"
            containerStyle={{ width: '100%' }}
            buttonStyle={{ height: 50 }}
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </Container>
    );
  }
}

const Buttons = ({ onPress, children }) => (
  <TouchableOpacity style={styless.button} onPress={onPress}>
    <Text style={styless.text}>{children}</Text>
  </TouchableOpacity>
);

const styless = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  row: { flexDirection: 'row' },
  image: { width: 200, height: 200, backgroundColor: 'gray' },
  button: {
    padding: 13,
    margin: 15,
    backgroundColor: '#dddddd',
  },
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
  },
});
