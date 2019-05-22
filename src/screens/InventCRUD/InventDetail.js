import React from 'react';
import { Input, Button } from 'react-native-elements';
import { Picker, Text, View, ScrollView } from 'react-native';
import Container from '../../components/Container';
import styles from '../styles';

const InventDetail = ({ navigation }) => (
  <Container>
    <ScrollView style={styles.scrollStyle}>
      <Container>
        <View style={{ width: '90%' }}>
          <View style={{ marginVertical: 8 }}>
            <Text
              style={{
                fontSize: 18,
                color: 'black',
                textDecorationLine: 'underline',
                fontWeight: 'bold',
              }}
            >
              Nomenklatur
            </Text>
          </View>
          <View
            style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
          >
            <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
              Nama Barang
            </Text>
            <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
              {`: Nama`}
            </Text>
          </View>
          <View
            style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
          >
            <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
              Fungsi
            </Text>
            <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
              {`: Fungsi`}
            </Text>
          </View>
          <View
            style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
          >
            <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
              Jenis
            </Text>
            <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
              {`: Jenis`}
            </Text>
          </View>
          <View
            style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
          >
            <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
              Merek
            </Text>
            <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
              {`: Merek`}
            </Text>
          </View>
          <View
            style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
          >
            <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
              No Registrasi
            </Text>
            <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
              {`: No Registrasi`}
            </Text>
          </View>
          <View
            style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
          >
            <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
              Kuantitas
            </Text>
            <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
              {`: Kuantitas`}
            </Text>
          </View>
          <View
            style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
          >
            <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
              Kondisi
            </Text>
            <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
              {`: Kondisi`}
            </Text>
          </View>
          <View
            style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
          >
            <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
              Jenis Pencatatan
            </Text>
            <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
              {`: Jenis Pencatatan`}
            </Text>
          </View>
          <View
            style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
          >
            <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
              No Mesin
            </Text>
            <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
              {`: No Mesin`}
            </Text>
          </View>
          <View
            style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
          >
            <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
              Negara Pembuat
            </Text>
            <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
              {`: Negara Pembuat`}
            </Text>
          </View>
          <View
            style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
          >
            <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
              Tahun Buat
            </Text>
            <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
              {`: Tahun Buat`}
            </Text>
          </View>
          <View
            style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
          >
            <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
              Tahun Milik
            </Text>
            <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
              {`: Tahun Milik`}
            </Text>
          </View>
          <View
            style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
          >
            <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
              Tahun Pakai
            </Text>
            <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
              {`: Tahun Pakai`}
            </Text>
          </View>
          <View
            style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
          >
            <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
              Daya Angkut
            </Text>
            <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
              {`: Daya Angkut`}
            </Text>
          </View>
          <View style={{ marginVertical: 8 }}>
            <Text
              style={{
                fontSize: 18,
                color: 'black',
                textDecorationLine: 'underline',
                fontWeight: 'bold',
              }}
            >
              Data Tambahan
            </Text>
          </View>
          <View
            style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
          >
            <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
              Pembina Komoditi
            </Text>
            <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
              {`: Pembina Komoditi`}
            </Text>
          </View>
          <View
            style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
          >
            <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
              Asal Pengadaan
            </Text>
            <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
              {`: Asal Pengadaan`}
            </Text>
          </View>
          <View
            style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
          >
            <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
              Nama Pemegang
            </Text>
            <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
              {`: Nama Pemegang`}
            </Text>
          </View>
          <View
            style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
          >
            <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
              NRP Pemegang
            </Text>
            <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
              {`: NRP Pemegang`}
            </Text>
          </View>
          <View
            style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
          >
            <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
              Pangkat Pemegang
            </Text>
            <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
              {`: Pangkat Pemegang`}
            </Text>
          </View>
          <View
            style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
          >
            <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
              Tanggal Perolehan
            </Text>
            <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
              {`: Tanggal Perolehan`}
            </Text>
          </View>
          <View
            style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
          >
            <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
              Tanggal Rekam
            </Text>
            <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
              {`:  Tanggal Rekam`}
            </Text>
          </View>
          <View style={{ marginVertical: 8 }}>
            <Text
              style={{
                fontSize: 18,
                color: 'black',
                textDecorationLine: 'underline',
                fontWeight: 'bold',
              }}
            >
              Spesifikasi
            </Text>
          </View>
        </View>
      </Container>
    </ScrollView>
    <View style={{ width: '100%', position: 'absolute', bottom: 0 }}>
      <Button
        title="Cancel"
        containerStyle={{ width: '100%' }}
        buttonStyle={{ height: 50 }}
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  </Container>
);

export default InventDetail;
