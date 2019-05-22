import React from 'react';
import { Input, Button } from 'react-native-elements';
import { Picker, Text, View, ScrollView } from 'react-native';
import Container from '../../components/Container';
import styles from '../styles';

const InventDetail = ({ navigation }) => {
  const unitBarang = navigation.state.params.data.unitBarang;
  const unitPengguna = navigation.state.params.data.unitPengguna;
  const pengadaan = navigation.state.params.data.pengadaan;

  return (
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
                Unit Barang
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Nama Barang
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.nama}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                merk
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.merk}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                type
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.type}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Tahun Buat
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.tahunBuat}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Pabrik
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.pabrik}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Negara Pembuat
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.negara}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '50%', fontSize: 14, color: 'black' }}>
                Tahun Perakitan
              </Text>
              <Text style={{ width: '50%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.perakitan}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Daya Muat
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.dayaMuat}`}
              </Text>
            </View>

            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Bobot
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.bobot}`}
              </Text>
            </View>

            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Daya Mesin/Isi Silinder
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.dayaMesin}`}
              </Text>
            </View>

            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Mesin Penggerak
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.mesinPenggerak}`}
              </Text>
            </View>

            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Jumlah Mesin
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.jumlahMesin}`}
              </Text>
            </View>

            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Bahan Bakar
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.bahanBakar}`}
              </Text>
            </View>

            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                No Mesin
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.mesinNo}`}
              </Text>
            </View>

            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                No Rangka
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.noRangka}`}
              </Text>
            </View>

            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                No BPKB
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.noBPKB}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                No Polisi
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.noPolisi}`}
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
                Perlengkapan
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Perlengkapan 1
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitPengguna.perlengkapan1}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Perlengkapan 2
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitPengguna.perlengkapan2}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Perlengkapan 3
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitPengguna.perlengkapan3}`}
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
                Unit Pengguna
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                No KIB Tanah
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitPengguna.namaUnit}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                No KIB Tanah
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitPengguna.alamat}`}
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
                Pengadaan
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Cara Perolehan
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${pengadaan.caraPerolehan}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Tanggal Buku
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${pengadaan.tglBuku}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Dari
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${pengadaan.dari}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Tgl Perolehan
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${pengadaan.tglPerolehan}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Kondisi
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${pengadaan.kondisi}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Harg
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: Rp. ${pengadaan.harga}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Dasar Harga
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${pengadaan.dasarHarga}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Sumber Dana
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${pengadaan.sumberDana}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                No APBN
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${pengadaan.noApbn}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Tanggal APBN
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${pengadaan.tglApbn}`}
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
                Harga Lainnya
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Harga Wajar
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: Rp. ${pengadaan.hargaWajar}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Status
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${pengadaan.status}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Catatan
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${pengadaan.catatan}`}
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
};
export default InventDetail;
