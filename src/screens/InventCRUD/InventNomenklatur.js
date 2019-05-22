import React from 'react';
import { Input, Button } from 'react-native-elements';
import { Picker, Text, View, ScrollView } from 'react-native';
import Bangunan from './InventKIBBangunan';
import Angkutan from './InventKIBAngkutan';
import Container from '../../components/Container';
import styles from '../styles';

const InventNomenklatur = ({ navigation }) => {
  console.log(navigation.state.params.type);
  return (
    <Container>
      <ScrollView style={styles.scrollStyle}>
        <Container>
          {navigation.state.params.type === 1 ? <Bangunan /> : <Angkutan />}
        </Container>
      </ScrollView>
      <View style={{ width: '100%', position: 'absolute', bottom: 0 }}>
        <Button
          title="Next"
          containerStyle={{ width: '100%' }}
          buttonStyle={{ height: 50 }}
          onPress={() =>
            navigation.navigate('InventUnitPengguna', {
              type: navigation.state.params.type,
            })
          }
        />
      </View>
    </Container>
  );
};
export default InventNomenklatur;
