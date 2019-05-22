import React from 'react';
import { SearchBar } from 'react-native-elements';
import {
  FlatList,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import Container from '../components/Container';
//import ListItem from '../components/ListItem';
import CardList from '../components/CardList';
import Separator from '../components/Separator';
import styles from './styles';

const Ivents = [
  {
    id: 1,
    unitBarang: {
      nama: 'Gedung Pelatihan',
      luasBangunan: '1000 m2',
      luasDasarBangunan: '0',
      jumlahLantai: '3',
      type: 'Permanen',
      tahunSelesaiDibangun: '2000',
      tahunSelesaiDigunakan: '2011',
      noImb: '9897K/2000',
      tglImb: '03-03-2000',
      provinsi: 'DKI Jakarta',
      kota: 'Jakarta Pusat',
      kecamatan: 'Tanah Abang',
      kelurahan: 'Tanah Abang',
      jalan: 'Jalan Abdul Muis',
      rt: '',
      noKIB: '',
    },
    unitPengguna: {
      namaUnit: 'KNPP',
      alamat: '',
    },
    pengadaan: {
      jenisTransaksi: 'Beli Langsung',
      tglBuku: '01-01-2000',
      dari: 'Departement PU',
      tglPerolehan: '01-01-2000',
      kondisi: 'Baik',
      harga: '900.000.000',
      sumberDana: 'Non-APBN',
      noApbn: '',
      tglApbn: '',
      hargaWajar: '',
      njop: '',
      dasarHarga: 'perolehan',
      status: '',
      catatan: '',
    },
    type: 1,
    stock: 2,
  },
  {
    id: 2,
    unitBarang: {
      nama: 'Mobil Avanza',
      merk: 'Innova',
      type: 'GLX',
      tahunBuat: '2008',
      pabrik: 'PT. Astra',
      negara: 'Jepang',
      perakitan: '2000',
      dayaMuat: '8 orang',
      bobot: '2000',
      dayaMesin: '',
      mesinPenggerak: '2 silinder',
      jumlahMesin: '2',
      bahanBakar: 'BENSIN',
      mesinNo: '2122332',
      noRangka: '876788',
      noBPKB: '988867',
      noPolisi: '1232',
    },
    unitPengguna: {
      namaUnit: 'KNPP',
      alamat: '',
      perlengkapan1: 'AC, Remote Control',
      perlengkapan2: '',
      perlengkapan3: '',
    },
    pengadaan: {
      caraPerolehan: 'Beli Langsung',
      tglBuku: '01-01-2009',
      dari: 'PT Astra',
      tglPerolehan: '01-01-2009',
      kondisi: 'Baik',
      harga: '100.000.000',
      sumberDana: 'APBN',
      noApbn: '787/VI/2008',
      tglApbn: '01-01-2008',
      hargaWajar: '',
      dasarHarga: 'perolehan',
      status: '',
      catatan: '',
    },
    type: 2,
    stock: 1,
  },
];

const InventList = ({ navigation }) => (
  <Container>
    <StatusBar translucent={true} barStyle="light-content" />
    <SearchBar
      searchIcon={true}
      placeholder="Type Here..."
      containerStyle={styles.containerSearch}
      inputContainerStyle={{ backgroundColor: 'white' }}
      lightTheme
    />
    <ScrollView style={styles.scrollStyle}>
      <FlatList
        data={Ivents}
        renderItem={({ item }) => (
          <CardList
            name={item.unitBarang.nama}
            stock={item.stock}
            onPress={() => {
              console.log(item);
              if (item.type === 1) {
                return navigation.navigate('InventDetailBangunan', {
                  data: item,
                });
              } else {
                return navigation.navigate('InventDetailAngkutan', {
                  data: item,
                });
              }
            }}
          />
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
      />
    </ScrollView>
    <TouchableOpacity
      style={{
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        backgroundColor: 'green',
      }}
      onPress={() => navigation.navigate('InventJenisKIB')}
    >
      <IconMI name="add" size={50} color="white" />
    </TouchableOpacity>
  </Container>
);

export default InventList;
