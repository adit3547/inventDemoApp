import React from 'react';
import { Input, Button } from 'react-native-elements';
import { Picker, Text, View, ScrollView } from 'react-native';
import Container from '../../components/Container';
import styles from '../styles';

const InventDataTambahan = ({ navigation }) => (
  <Container>
    <ScrollView style={styles.scrollStyle}>
      <Container>
        <View style={{ width: '85%', marginBottom: 10, marginTop: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'grey' }}>
            Pembina Komoditi
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
              <Picker.Item label="Jenis1" value="1" />
              <Picker.Item label="Jenis2" value="2" />
            </Picker>
          </View>
        </View>
        <View style={{ width: '85%', marginBottom: 10, marginTop: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'grey' }}>
            Asal Pengadaan
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
              <Picker.Item label="Fungsi1" value="1" />
              <Picker.Item label="Fungsi2" value="2" />
            </Picker>
          </View>
        </View>
        <Input
          containerStyle={{ width: '90%', marginVertical: 10 }}
          placeholder="Nama Pemegang"
          inputStyle={{ marginLeft: 5 }}
          inputContainerStyle={{
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'grey',
            height: 40,
            marginBottom: 10,
          }}
          label="Nama Pemegang"
          labelStyle={{ fontSize: 14 }}
        />
        <Input
          containerStyle={{ width: '90%', marginVertical: 10 }}
          placeholder="NRP Pemegang"
          inputStyle={{ marginLeft: 5 }}
          inputContainerStyle={{
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'grey',
            height: 40,
            marginBottom: 5,
          }}
          label="NRP Pemegang"
          labelStyle={{ fontSize: 14 }}
        />
        <View style={{ width: '85%', marginBottom: 10, marginTop: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'grey' }}>
            Pangkat Pemegang
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
              <Picker.Item label="Kondisi1" value="1" />
              <Picker.Item label="Kondisi2" value="2" />
            </Picker>
          </View>
        </View>
        <Input
          containerStyle={{ width: '90%', marginVertical: 10 }}
          placeholder="Tanggal Perolehan"
          inputStyle={{ marginLeft: 5 }}
          inputContainerStyle={{
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'grey',
            height: 40,
            marginBottom: 5,
          }}
          label="Tanggal Perolehan"
          labelStyle={{ fontSize: 14 }}
        />
        <Input
          containerStyle={{ width: '90%', marginVertical: 10 }}
          placeholder="Tanggal Rekam"
          inputStyle={{ marginLeft: 5 }}
          inputContainerStyle={{
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'grey',
            height: 40,
            marginBottom: 5,
          }}
          label="Tanggal Rekam"
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
          navigation.navigate('InventSpesifikasi', {
            type: navigation.state.params.type,
          })
        }
      />
    </View>
  </Container>
);

export default InventDataTambahan;
