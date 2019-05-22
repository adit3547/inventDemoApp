import React from 'react';
import { Input, Button } from 'react-native-elements';
import { Picker, Text, View, ScrollView } from 'react-native';
import Container from '../../components/Container';
import styles from '../styles';

const InventNomenklatur = ({ navigation }) => (
  <Container>
    <ScrollView style={styles.scrollStyle}>
      <Container>
        <Input
          containerStyle={{ width: '90%', marginVertical: 10 }}
          placeholder="No Mesin"
          inputStyle={{ marginLeft: 5 }}
          inputContainerStyle={{
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'grey',
            height: 40,
            marginBottom: 5,
          }}
          keyboardType="numeric"
          label="No Mesin"
          labelStyle={{ fontSize: 14 }}
        />
        <View style={{ width: '85%', marginBottom: 10, marginTop: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'grey' }}>
            Negara Pembuat
          </Text>
          <View
            style={{
              borderRadius: 5,
              borderWidth: 1,
              borderColor: 'grey',
              height: 40,
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <Picker mode="dialog">
              <Picker.Item label="Negara Pembuat 1" value="1" />
              <Picker.Item label="Negara Pembuat 2" value="2" />
            </Picker>
          </View>
        </View>
        <View style={{ width: '85%', marginBottom: 10, marginTop: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'grey' }}>
            Tahun Buat
          </Text>
          <View
            style={{
              borderRadius: 5,
              borderWidth: 1,
              borderColor: 'grey',
              height: 40,
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <Picker mode="dialog">
              <Picker.Item label="2017" value="1" />
              <Picker.Item label="2018" value="2" />
            </Picker>
          </View>
        </View>
        <View style={{ width: '85%', marginBottom: 10, marginTop: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'grey' }}>
            Tahun Milik
          </Text>
          <View
            style={{
              borderRadius: 5,
              borderWidth: 1,
              borderColor: 'grey',
              height: 40,
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <Picker mode="dialog">
              <Picker.Item label="2017" value="1" />
              <Picker.Item label="2018" value="2" />
            </Picker>
          </View>
        </View>
        <View style={{ width: '85%', marginBottom: 10, marginTop: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'grey' }}>
            Tahun Pakai
          </Text>
          <View
            style={{
              borderRadius: 5,
              borderWidth: 1,
              borderColor: 'grey',
              height: 40,
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <Picker mode="dialog">
              <Picker.Item label="2017" value="1" />
              <Picker.Item label="2018" value="2" />
            </Picker>
          </View>
        </View>
        <Input
          containerStyle={{ width: '90%', marginVertical: 10 }}
          placeholder="Daya Angkut"
          inputStyle={{ marginLeft: 5 }}
          inputContainerStyle={{
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'grey',
            height: 40,
            marginBottom: 5,
          }}
          keyboardType="numeric"
          label="Daya Angkut"
          labelStyle={{ fontSize: 14 }}
        />
      </Container>
    </ScrollView>
    <View style={{ width: '100%', position: 'absolute', bottom: 0 }}>
      <Button
        title="Next"
        containerStyle={{ width: '100%' }}
        buttonStyle={{ height: 50 }}
        onPress={() =>
          navigation.navigate('InventDataTambahan', {
            type: navigation.state.params.type,
          })
        }
      />
    </View>
  </Container>
);

export default InventNomenklatur;
