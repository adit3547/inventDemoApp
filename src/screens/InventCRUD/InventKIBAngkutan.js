import React from 'react';
import { Input } from 'react-native-elements';
import { View, Text, Picker } from 'react-native';

const InventKIBAngkutan = () => (
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
      placeholder="Merek"
      inputStyle={{ marginLeft: 5 }}
      inputContainerStyle={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
      }}
      label="Merek"
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
      placeholder="Tahun Pembuatan"
      inputStyle={{ marginLeft: 5 }}
      inputContainerStyle={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
      }}
      label="Tahun Pembuatan"
      labelStyle={{ fontSize: 14 }}
    />
    <Input
      containerStyle={{ width: '90%', marginVertical: 10 }}
      placeholder="Nama Pabrik"
      inputStyle={{ marginLeft: 5 }}
      inputContainerStyle={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
      }}
      label="Nama Pabrik"
      labelStyle={{ fontSize: 14 }}
    />
    <Input
      containerStyle={{ width: '90%', marginVertical: 10 }}
      placeholder="Negara Pembuat"
      inputStyle={{ marginLeft: 5 }}
      inputContainerStyle={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
      }}
      label="Negara Pembuat"
      labelStyle={{ fontSize: 14 }}
    />
    <Input
      containerStyle={{ width: '90%', marginVertical: 10 }}
      placeholder="Tahun Perakitan"
      inputStyle={{ marginLeft: 5 }}
      inputContainerStyle={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
      }}
      keyboardType="numeric"
      label="Tahun Perakitan"
      labelStyle={{ fontSize: 14 }}
    />
    <Input
      containerStyle={{ width: '90%', marginVertical: 10 }}
      placeholder="Daya Muat"
      inputStyle={{ marginLeft: 5 }}
      inputContainerStyle={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
      }}
      label="Daya Muat"
      labelStyle={{ fontSize: 14 }}
    />
    <Input
      containerStyle={{ width: '90%', marginVertical: 10 }}
      placeholder="Bobot"
      inputStyle={{ marginLeft: 5 }}
      inputContainerStyle={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
      }}
      label="Bobot"
      labelStyle={{ fontSize: 14 }}
    />
    <Input
      containerStyle={{ width: '90%', marginVertical: 10 }}
      placeholder="Daya Mesin/ Isi Silinder"
      inputStyle={{ marginLeft: 5 }}
      inputContainerStyle={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
      }}
      label="Daya Mesin/ Isi Silinder"
      labelStyle={{ fontSize: 14 }}
    />
    <Input
      containerStyle={{ width: '90%', marginVertical: 10 }}
      placeholder="Mesin Penggerak"
      inputStyle={{ marginLeft: 5 }}
      inputContainerStyle={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
      }}
      label="Mesin Penggerak"
      labelStyle={{ fontSize: 14 }}
    />
    <Input
      containerStyle={{ width: '90%', marginVertical: 10 }}
      placeholder="Jumlah Mesin"
      inputStyle={{ marginLeft: 5 }}
      inputContainerStyle={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
      }}
      label="Jumlah Mesin"
      labelStyle={{ fontSize: 14 }}
    />
    <Input
      containerStyle={{ width: '90%', marginVertical: 10 }}
      placeholder="Bahan Bakar"
      inputStyle={{ marginLeft: 5 }}
      inputContainerStyle={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
      }}
      label="Bahan Bakar"
      labelStyle={{ fontSize: 14 }}
    />
    <Input
      containerStyle={{ width: '90%', marginVertical: 10 }}
      placeholder="No Mesin"
      inputStyle={{ marginLeft: 5 }}
      inputContainerStyle={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
      }}
      keyboardType="numeric"
      label="No Mesin"
      labelStyle={{ fontSize: 14 }}
    />

    <Input
      containerStyle={{ width: '90%', marginVertical: 10 }}
      placeholder="No Rangka"
      inputStyle={{ marginLeft: 5 }}
      inputContainerStyle={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
      }}
      keyboardType="numeric"
      label="No Rangka"
      labelStyle={{ fontSize: 14 }}
    />
    <Input
      containerStyle={{ width: '90%', marginVertical: 10 }}
      placeholder="No BPKB"
      inputStyle={{ marginLeft: 5 }}
      inputContainerStyle={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
      }}
      label="No BPKB"
      labelStyle={{ fontSize: 14 }}
    />
    <Input
      containerStyle={{ width: '90%', marginVertical: 10 }}
      placeholder="No Polisi"
      inputStyle={{ marginLeft: 5 }}
      inputContainerStyle={{
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        height: 40,
      }}
      label="No Polisi"
      labelStyle={{ fontSize: 14 }}
    />
  </View>
);

export default InventKIBAngkutan;
