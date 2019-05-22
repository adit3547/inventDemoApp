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
                Luas Bangunan
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.luasBangunan}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Luas Dasar Bangunan
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.luasDasarBangunan}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Jumlah Lantai
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.jumlahLantai}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Type
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.type}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '50%', fontSize: 14, color: 'black' }}>
                Tahun Selesai Dibangun
              </Text>
              <Text style={{ width: '50%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.tahunSelesaiDibangun}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '50%', fontSize: 14, color: 'black' }}>
                Tahun Selesai Digunakan
              </Text>
              <Text style={{ width: '50%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.tahunSelesaiDigunakan}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                No IMB
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.noImb}`}
              </Text>
            </View>

            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Tanggal IMB
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.tglImb}`}
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
                Letak Bangunan
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Provinsi
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.provinsi}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Kota/Kabupaten
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.kota}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Kecamatan
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.kecamatan}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Kelurahan/Desa
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.kelurahan}`}
              </Text>
            </View>
            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                Jalan
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.jalan}`}
              </Text>
            </View>

            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                RT/RW
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.rt}`}
              </Text>
            </View>

            <View
              style={{ width: '100%', flexDirection: 'row', marginVertical: 4 }}
            >
              <Text style={{ width: '40%', fontSize: 14, color: 'black' }}>
                No KIB Tanah
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${unitBarang.noKIB}`}
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
                Jenis Transaksi
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${pengadaan.jenisTransaksi}`}
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
                NJOP
              </Text>
              <Text style={{ width: '60%', fontSize: 14, color: 'black' }}>
                {`: ${pengadaan.njop}`}
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
