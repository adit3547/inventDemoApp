import React from 'react';
import { Input, Button } from 'react-native-elements';
import { Picker, Text, View, ScrollView } from 'react-native';
import Container from '../../components/Container';
import styles from '../styles';

const InventUnitPengguna = ({ navigation }) => (
  <Container>
    <ScrollView style={styles.scrollStyle}>
      <Container>
        {navigation.state.params.type === 2 ? (
          <View style={{ width: '100%', alignItems: 'center' }}>
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
            <Input
              containerStyle={{ width: '90%', marginVertical: 10 }}
              placeholder="Perlengkapan 1"
              inputStyle={{ marginLeft: 5 }}
              inputContainerStyle={{
                borderRadius: 5,
                borderWidth: 1,
                borderColor: 'grey',
                height: 40,
                marginBottom: 5,
              }}
              label="Perlengkapan 1"
              labelStyle={{ fontSize: 14 }}
            />
            <Input
              containerStyle={{ width: '90%', marginVertical: 10 }}
              placeholder="Perlengkapan 2"
              inputStyle={{ marginLeft: 5 }}
              inputContainerStyle={{
                borderRadius: 5,
                borderWidth: 1,
                borderColor: 'grey',
                height: 40,
                marginBottom: 5,
              }}
              label="Perlengkapan 2"
              labelStyle={{ fontSize: 14 }}
            />
            <Input
              containerStyle={{ width: '90%', marginVertical: 10 }}
              placeholder="Perlengkapan 3"
              inputStyle={{ marginLeft: 5 }}
              inputContainerStyle={{
                borderRadius: 5,
                borderWidth: 1,
                borderColor: 'grey',
                height: 40,
                marginBottom: 5,
              }}
              label="Perlengkapan 3"
              labelStyle={{ fontSize: 14 }}
            />
          </View>
        ) : null}
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
        <Input
          containerStyle={{ width: '90%', marginVertical: 10 }}
          placeholder="Nama Unit"
          inputStyle={{ marginLeft: 5 }}
          inputContainerStyle={{
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'grey',
            height: 40,
            marginBottom: 5,
          }}
          label="Nama Unit"
          labelStyle={{ fontSize: 14 }}
        />
        <Input
          containerStyle={{ width: '90%', marginVertical: 10 }}
          placeholder="Alamat"
          inputStyle={{ marginLeft: 5 }}
          inputContainerStyle={{
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'grey',
            height: 40,
            marginBottom: 5,
          }}
          label="Alamat"
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
          navigation.navigate('InventPengadaan', {
            type: navigation.state.params.type,
          })
        }
      />
    </View>
  </Container>
);

export default InventUnitPengguna;
