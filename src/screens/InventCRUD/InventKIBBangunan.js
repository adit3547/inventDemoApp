import React from 'react';
import { Input } from 'react-native-elements';
import { View, Text, Picker } from 'react-native';

const InventKIBBangunan = () => (
  <View style={{ width: '100%', alignItems: 'center' }}>
    <View style={{ width: '85%', marginBottom: 10, marginTop: 10 }}>
      <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'grey' }}>
        Kode Barang
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
    <Input
      containerStyle={{ width: '90%', marginVertical: 10 }}
      placeholder="Nama Barang"
      inputStyle={{ marginLeft: 5 }}
      inputContainerStyle={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
      }}
      label="Nama Barang"
      labelStyle={{ fontSize: 14 }}
    />
    <Input
      containerStyle={{ width: '90%', marginVertical: 10 }}
      placeholder="Luas Bangunan"
      inputStyle={{ marginLeft: 5 }}
      inputContainerStyle={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
      }}
      keyboardType="numeric"
      label="Luas Bangunan"
      labelStyle={{ fontSize: 14 }}
    />
    <Input
      containerStyle={{ width: '90%', marginVertical: 10 }}
      placeholder="Luas Dasar Bangunan"
      inputStyle={{ marginLeft: 5 }}
      inputContainerStyle={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
      }}
      keyboardType="numeric"
      label="Luas Dasar Bangunan"
      labelStyle={{ fontSize: 14 }}
    />
    <Input
      containerStyle={{ width: '90%', marginVertical: 10 }}
      placeholder="Jumlah lantai"
      inputStyle={{ marginLeft: 5 }}
      inputContainerStyle={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
      }}
      keyboardType="numeric"
      label="Jumlah lantai"
      labelStyle={{ fontSize: 14 }}
    />
    <Input
      containerStyle={{ width: '90%', marginVertical: 10 }}
      placeholder="Type"
      inputStyle={{ marginLeft: 5 }}
      inputContainerStyle={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
      }}
      label="Type"
      labelStyle={{ fontSize: 14 }}
    />
    <Input
      containerStyle={{ width: '90%', marginVertical: 10 }}
      placeholder="Tahun Selesai Dibangun"
      inputStyle={{ marginLeft: 5 }}
      inputContainerStyle={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
      }}
      keyboardType="numeric"
      label="Tahun Selesai Dibangun"
      labelStyle={{ fontSize: 14 }}
    />
    <Input
      containerStyle={{ width: '90%', marginVertical: 10 }}
      placeholder="Tahun Selesai Digunakan"
      inputStyle={{ marginLeft: 5 }}
      inputContainerStyle={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
      }}
      keyboardType="numeric"
      label="Tahun Selesai Digunakan"
      labelStyle={{ fontSize: 14 }}
    />
    <Input
      containerStyle={{ width: '90%', marginVertical: 10 }}
      placeholder="No IMB"
      inputStyle={{ marginLeft: 5 }}
      inputContainerStyle={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
      }}
      keyboardType="numeric"
      label="No IMB"
      labelStyle={{ fontSize: 14 }}
    />
    <Input
      containerStyle={{ width: '90%', marginVertical: 10 }}
      placeholder="Tanggal IMB"
      inputStyle={{ marginLeft: 5 }}
      inputContainerStyle={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
      }}
      label="Tanggal IMB"
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
        Letak Bangunan
      </Text>
    </View>
    <View style={{ width: '85%', marginBottom: 10, marginTop: 10 }}>
      <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'grey' }}>
        Provinsi
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
          <Picker.Item label="DKI JAKARTA" value="1" />
          <Picker.Item label="JAWA BARAT" value="2" />
        </Picker>
      </View>
    </View>
    <View style={{ width: '85%', marginBottom: 10, marginTop: 10 }}>
      <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'grey' }}>
        Kota/Kabupaten
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
          <Picker.Item label="Jakarta Pusat" value="1" />
          <Picker.Item label="Jakarta Selatan" value="2" />
        </Picker>
      </View>
    </View>
    <Input
      containerStyle={{ width: '90%', marginVertical: 10 }}
      placeholder="Kecamatan"
      inputStyle={{ marginLeft: 5 }}
      inputContainerStyle={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
      }}
      label="Kecamatan"
      labelStyle={{ fontSize: 14 }}
    />
    <Input
      containerStyle={{ width: '90%', marginVertical: 10 }}
      placeholder="Kelurahan/Desa"
      inputStyle={{ marginLeft: 5 }}
      inputContainerStyle={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
      }}
      label="Kelurahan/Desa"
      labelStyle={{ fontSize: 14 }}
    />
    <Input
      containerStyle={{ width: '90%', marginVertical: 10 }}
      placeholder="Jalan"
      inputStyle={{ marginLeft: 5 }}
      inputContainerStyle={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
      }}
      label="Jalan"
      labelStyle={{ fontSize: 14 }}
    />
    <Input
      containerStyle={{ width: '90%', marginVertical: 10 }}
      placeholder="RT/RW"
      inputStyle={{ marginLeft: 5 }}
      inputContainerStyle={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
      }}
      label="RT/RW"
      labelStyle={{ fontSize: 14 }}
    />
    <Input
      containerStyle={{ width: '90%', marginVertical: 10 }}
      placeholder="No KIB Tanah"
      inputStyle={{ marginLeft: 5 }}
      inputContainerStyle={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
      }}
      keyboardType="numeric"
      label="No KIB Tanah"
      labelStyle={{ fontSize: 14 }}
    />
  </View>
);

export default InventKIBBangunan;
