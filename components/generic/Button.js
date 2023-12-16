import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity style={styles.btnView}>
      <Text
        style={{
          paddingVertical: 12,
          paddingHorizontal: 10,
          textAlign: 'center',
          fontWeight: '600',
          fontSize: 14,
          color: '#2A4BA0',
        }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnView: {
    borderWidth: 1,
    marginVertical: 15,
    width: 100,
    borderRadius: 15,
    borderColor: '#2A4BA0',
  },
});
