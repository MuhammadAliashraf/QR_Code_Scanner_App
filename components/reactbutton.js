import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from '../styling/NativeStyling';

function ReactButton(props) {
  const {label, onPress} = props;
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.btn, styles.bgBlue, styles.m1]}
      >
        <Text style={[styles.textWhite, styles.textCenter, styles.fs3]}>
          {label}
        </Text>
      </TouchableOpacity>
    </>
  );
}


function ReactButtonOutline(props) {
  const {label, onPress} = props;
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.btn, styles.border1, styles.borderRed, styles.bgWhite]}
      >
        <Text style={[styles.textRed, styles.textCenter]}>{label}</Text>
      </TouchableOpacity>
    </>
  );
}

export {ReactButton, ReactButtonOutline};
