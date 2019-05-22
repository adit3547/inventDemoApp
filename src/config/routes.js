import React from 'react';
import { Platform, StatusBar } from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import Home from '../screens/Home';
import Login from '../screens/Login';
import ListInvent from '../screens/ListInvent';
import InventJenisKIB from '../screens/InventCRUD/InventJenisKIB';
import InventNomenklatur from '../screens/InventCRUD/InventNomenklatur';
//import InventNomenklatur2 from '../screens/InventCRUD/InventNomenklatur2';
//import InventDataTambahan from '../screens/InventCRUD/InventDataTambahan';
import InventUnitPengguna from '../screens/InventCRUD/InventUnitPengguna';
import InventPengadaan from '../screens/InventCRUD/InventPengadaan';
import InventSpesifikasi from '../screens/InventCRUD/InventSpesifikasi';
import InventDetail from '../screens/InventCRUD/InventDetail';
import InventDetailBangunan from '../screens/InventCRUD/InventDetailBangunan';
import InventDetailAngkutan from '../screens/InventCRUD/InventDetailAngkutan';
import BarcodeScanner from '../screens/BarcodeScanner';
import Location from '../screens/testCurrentLocation';

const headerStyle = {
  marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
};

export const SignedOut = createStackNavigator({
  SignIn: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
});

export const SignedIn = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  ListInvent: {
    screen: ListInvent,
    navigationOptions: {
      headerTitle: 'List Barang',
    },
  },
  InventJenisKIB: {
    screen: InventJenisKIB,
    navigationOptions: {
      headerTitle: 'Pilih Tipe KIB',
    },
  },
  InventNomenklatur: {
    screen: InventNomenklatur,
    navigationOptions: {
      headerTitle: 'Unit Barang',
    },
  },
  InventUnitPengguna: {
    screen: InventUnitPengguna,
    navigationOptions: {
      headerTitle: 'Unit Pengguna',
    },
  },
  InventPengadaan: {
    screen: InventPengadaan,
    navigationOptions: {
      headerTitle: 'Pengadaan',
    },
  },
  InventSpesifikasi: {
    screen: InventSpesifikasi,
    navigationOptions: {
      headerTitle: 'Foto Barang',
    },
  },
  InventDetail: {
    screen: InventDetail,
    navigationOptions: {
      headerTitle: 'Detail Barang',
    },
  },
  InventDetailBangunan: {
    screen: InventDetailBangunan,
    navigationOptions: {
      headerTitle: 'Detail Barang',
    },
  },
  InventDetailAngkutan: {
    screen: InventDetailAngkutan,
    navigationOptions: {
      headerTitle: 'Detail Barang',
    },
  },
  BarcodeScanner: {
    screen: BarcodeScanner,
    navigationOptions: {
      headerTitle: 'Barcode Scanner',
    },
  },
  Location: {
    screen: Location,
    navigationOptions: {
      headerTitle: 'Location',
    },
  },
});

export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn,
      },
      SignedOut: {
        screen: SignedOut,
      },
    },
    {
      initialRouteName: signedIn ? 'SignedIn' : 'SignedOut',
      navigationOptions: {
        header: null,
      },
    }
  );
};

export const container = signedIn =>
  createAppContainer(createRootNavigator(signedIn));
