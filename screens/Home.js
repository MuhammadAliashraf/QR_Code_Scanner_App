import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { VisionCamera } from 'react-vision-camera';
import {ReactButton} from '../components/reactbutton';
import styles from '../styling/NativeStyling';

const Home = ({navigation}) => {

  const data=()=>{
    console.log("Button is working")
  }


  return (
    <View style={[styles.alignItemsCenter]}>
      <View style={[styles.h40]}>
        <Text style={[styles.textBlue, styles.fs3, styles.mt5]}>
          Scan QR and BAR CODE
        </Text>
      </View>
      <View>
        <ReactButton
          onPress={() => 
          {
            navigation.navigate('Scanner');
          }
        }
          label="Cheak In"
        />
      </View>
      <View>
        <ReactButton
          onPress={() => {
            navigation.navigate('CheakOut');
          }}
          label="Cheak Out"
        />
      </View>
    </View>
  );
};

export default Home;
