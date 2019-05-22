import React from 'react';
import IconSLI from 'react-native-vector-icons/SimpleLineIcons';
import IconMI from 'react-native-vector-icons/MaterialCommunityIcons';
import { Header, Button } from 'react-native-elements';
import { TouchableOpacity, TouchableHighlight, View, Text } from 'react-native';
import { onSignOut } from '../config/auth';

const Home = ({ navigation }) => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#ecf0f1',
    }}
  >
    <Header
      placement="left"
      centerComponent={{ text: 'Dashboard', style: { color: '#fff' } }}
    />
    <TouchableOpacity
      style={{
        width: '70%',
        borderWidth: 1,
        borderColor: 'green',
        backgroundColor: 'green',
        marginTop: 10,
      }}
      onPress={() => navigation.navigate('BarcodeScanner')}
    >
      <View style={{ alignItems: 'center', marginVertical: 10 }}>
        <IconMI name="barcode-scan" size={40} color="white" />
        <Text style={{ color: 'white', fontSize: 15 }}>Barcode Scanner</Text>
      </View>
    </TouchableOpacity>
    <TouchableHighlight
      style={{
        width: '90%',
        borderWidth: 1,
        borderColor: 'grey',
        marginTop: 10,
      }}
      onPress={() => navigation.navigate('ListInvent')}
    >
      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            width: '20%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'blue',
          }}
        >
          <IconSLI name="list" size={40} color="white" />
        </View>
        <View
          style={{ flexDirection: 'column', marginLeft: 20, marginVertical: 5 }}
        >
          <Text style={{ color: 'black', fontSize: 20 }}>
            Persediaan Barang
          </Text>
          <Text style={{ color: 'grey', fontSize: 10 }}>List, Add, Edit</Text>
        </View>
      </View>
    </TouchableHighlight>
    <TouchableHighlight
      style={{
        width: '90%',
        borderWidth: 1,
        borderColor: 'grey',
        marginTop: 10,
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            width: '20%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'red',
          }}
        >
          <IconMI name="folder" size={40} color="white" />
        </View>
        <View
          style={{ flexDirection: 'column', marginLeft: 20, marginVertical: 5 }}
        >
          <Text style={{ color: 'black', fontSize: 20 }}>Kategori Barang</Text>
          <Text style={{ color: 'grey', fontSize: 10 }}>List</Text>
        </View>
      </View>
    </TouchableHighlight>
    <TouchableHighlight
      style={{
        width: '90%',
        borderWidth: 1,
        borderColor: 'grey',
        marginTop: 10,
      }}
      onPress={() => navigation.navigate('Location')}
    >
      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            width: '20%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'teal',
          }}
        >
          <IconSLI name="location-pin" size={40} color="white" />
        </View>
        <View
          style={{ flexDirection: 'column', marginLeft: 20, marginVertical: 5 }}
        >
          <Text style={{ color: 'black', fontSize: 20 }}>Location</Text>
          <Text style={{ color: 'grey', fontSize: 10 }}>
            Check Lokasi Saat Ini
          </Text>
        </View>
      </View>
    </TouchableHighlight>
    <View style={{ flex: 1, width: '50%', position: 'absolute', bottom: 50 }}>
      <Button
        title="Log Out"
        containerStyle={{ width: '100%' }}
        buttonStyle={{ height: 40 }}
        onPress={() => onSignOut().then(() => navigation.navigate('SignedOut'))}
      />
    </View>
  </View>
);

export default Home;
