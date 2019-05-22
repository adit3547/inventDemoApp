import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DefaultImage from '../../assets/image.png';
import styles from './styles';

const CardList = ({ onPress, name, stock }) => {
  return (
    <TouchableHighlight
      style={{
        width: '90%',
      }}
      onPress={onPress}
    >
      <View style={styles.row}>
        <View
          style={{
            width: '20%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image style={{ height: 40, width: 40 }} source={DefaultImage} />
        </View>
        <View
          style={{
            flexDirection: 'column',
            marginLeft: 10,
            marginVertical: 5,
            width: '70%',
          }}
        >
          <Text style={{ color: 'black', fontSize: 16 }}>{name}</Text>
          <Text
            style={{ color: 'grey', fontSize: 12 }}
          >{`${stock} in stock`}</Text>
        </View>
        <View style={{ width: '10%' }}>
          <Icon size={20} color="grey" name="keyboard-arrow-right" />
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default CardList;
