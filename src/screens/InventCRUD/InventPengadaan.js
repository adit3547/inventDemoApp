import React from 'react';
import { Input, Button } from 'react-native-elements';
import { Picker, Text, View, ScrollView } from 'react-native';
import Container from '../../components/Container';
import styles from '../styles';

const InventDataTambahan = ({ navigation }) => (
  <Container>
    <ScrollView style={styles.scrollStyle}>
      <Container>
        <View style={{ marginVertical: 8 }}>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              textDecorationLine: 'underline',
              fontWeight: 'bold',
            }}
          >
            Pengadaan
          </Text>
        </View>
        <View style={{ width: '85%', marginBottom: 10, marginTop: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'grey' }}>
            Cara Perolehan
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
              <Picker.Item label="Cara 1" value="1" />
              <Picker.Item label="Cara 2" value="2" />
            </Picker>
          </View>
        </View>
        <Input
          containerStyle={{ width: '90%', marginVertical: 10 }}
          placeholder="Asal Perolehan/Dari"
          inputStyle={{ marginLeft: 5 }}
          inputContainerStyle={{
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'grey',
            height: 40,
            marginBottom: 10,
          }}
          label="Asal Perolehan/Dari"
          labelStyle={{ fontSize: 14 }}
        />
        <Input
          containerStyle={{ width: '90%', marginVertical: 10 }}
          placeholder="Tgl Perolehan"
          inputStyle={{ marginLeft: 5 }}
          inputContainerStyle={{
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'grey',
            height: 40,
            marginBottom: 5,
          }}
          label="Tgl Perolehan"
          labelStyle={{ fontSize: 14 }}
        />
        <View style={{ width: '85%', marginBottom: 10, marginTop: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'grey' }}>
            Kondisi
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
              <Picker.Item label="Baik" value="1" />
              <Picker.Item label="Rusak Ringan" value="2" />
              <Picker.Item label="Rusak Berat" value="3" />
            </Picker>
          </View>
        </View>
        <Input
          containerStyle={{ width: '90%', marginVertical: 10 }}
          placeholder="Harga"
          inputStyle={{ marginLeft: 5 }}
          inputContainerStyle={{
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'grey',
            height: 40,
            marginBottom: 5,
          }}
          keyboardType="numeric"
          label="Harga"
          labelStyle={{ fontSize: 14 }}
        />
        <View style={{ width: '85%', marginBottom: 10, marginTop: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'grey' }}>
            Dasar Harga
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
              <Picker.Item label="Perolehan" value="1" />
              <Picker.Item label="Taksiran" value="2" />
            </Picker>
          </View>
        </View>
        <View style={{ width: '85%', marginBottom: 10, marginTop: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'grey' }}>
            Sumber Dana
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
              <Picker.Item label="APBN" value="1" />
              <Picker.Item label="Non - APBN" value="2" />
            </Picker>
          </View>
        </View>
        <Input
          containerStyle={{ width: '90%', marginVertical: 10 }}
          placeholder="No APBN"
          inputStyle={{ marginLeft: 5 }}
          inputContainerStyle={{
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'grey',
            height: 40,
            marginBottom: 5,
          }}
          label="No APBN"
          labelStyle={{ fontSize: 14 }}
        />
        <Input
          containerStyle={{ width: '90%', marginVertical: 10 }}
          placeholder="Tgl APBN"
          inputStyle={{ marginLeft: 5 }}
          inputContainerStyle={{
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'grey',
            height: 40,
            marginBottom: 5,
          }}
          label="Tgl APBN"
          labelStyle={{ fontSize: 14 }}
        />
        <View style={{ marginVertical: 8 }}>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              textDecorationLine: 'underline',
              fontWeight: 'bold',
            }}
          >
            Harga Lainnya dan Status
          </Text>
        </View>
        <Input
          containerStyle={{ width: '90%', marginVertical: 10 }}
          placeholder="Harga Wajar"
          inputStyle={{ marginLeft: 5 }}
          inputContainerStyle={{
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'grey',
            height: 40,
            marginBottom: 5,
          }}
          keyboardType="numeric"
          label="Harga wajar"
          labelStyle={{ fontSize: 14 }}
        />
        <Input
          containerStyle={{ width: '90%', marginVertical: 10 }}
          placeholder="Status"
          inputStyle={{ marginLeft: 5 }}
          inputContainerStyle={{
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'grey',
            height: 40,
            marginBottom: 5,
          }}
          label="Status"
          labelStyle={{ fontSize: 14 }}
        />
        <Input
          containerStyle={{ width: '90%', marginVertical: 10 }}
          placeholder="Catatan Pengguna"
          inputStyle={{ marginLeft: 5 }}
          inputContainerStyle={{
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'grey',
            height: 40,
            marginBottom: 5,
          }}
          label="Catatan Pengguna"
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
