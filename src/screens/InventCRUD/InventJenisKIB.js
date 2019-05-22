import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import Container from '../../components/Container';

const InventJenisKIB = ({ navigation }) => (
  <Container justifyContent="center">
    <View style={{ width: '60%', marginBottom: 20 }}>
      <Button
        title="KIB Gedung dan Bangunan"
        containerStyle={{ width: '100%' }}
        buttonStyle={{ height: 50 }}
        onPress={() => navigation.navigate('InventNomenklatur', { type: 1 })}
      />
    </View>
    <View style={{ width: '60%', marginBottom: 20 }}>
      <Button
        title="KIB Alat Angkutan"
        containerStyle={{ width: '100%' }}
        buttonStyle={{ height: 50 }}
        onPress={() => navigation.navigate('InventNomenklatur', { type: 2 })}
      />
    </View>
  </Container>
);

export default InventJenisKIB;
