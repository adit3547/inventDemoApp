import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles';

const Container = ({ children, justifyContent }) => {
  const containerStyles = [styles.container];
  if (justifyContent) {
    containerStyles.push({ justifyContent: justifyContent });
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={containerStyles}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

Container.propTypes = {
  children: PropTypes.any,
  justifyContent: PropTypes.string,
};

export default Container;
