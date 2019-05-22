import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const ListItem = ({ text, onPress }) => (
  <TouchableHighlight onPress={onPress} underlayColor="#000">
    <View style={styles.row}>
      <View style={{ width: '90%' }}>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={{ width: '10%' }}>
        <Icon size={20} color="grey" name="keyboard-arrow-right" />
      </View>
    </View>
  </TouchableHighlight>
);

ListItem.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func,
};

export default ListItem;
