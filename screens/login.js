import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {ReactButton} from '../components/reactbutton';
import styles from '../styling/NativeStyling';

const Login = ({navigation}) => {
  const [model, setmodel] = useState([]);
  return (
    <>
      <View>
        <View style={[styles.p2, styles.bgWhite, styles.h100]}>
          <View>
            <View>
              <View style={[styles.alignItemsCenter, styles.mt3]}>
                <Image
                  source={require('../assets/logo.jpg')}
                  style={{width: 140, height: 180}}
                />
                <Text style={[styles.fs50, styles.textBlack]}>
                  <Text style={[styles.textRed]}></Text>
                </Text>
              </View>
            </View>
            <View style={[styles.pt4]}>
              <View style={[styles.mb2, styles.mt2]}>
                <Text style={[styles.fs5, styles.textBlack, styles.pb1]}>
                  Email
                </Text>
                <TextInput
                  style={[
                    styles.border1,
                    styles.textBlack,
                    styles.ps2,
                    styles.rounded,
                  ]}
                  onChangeText={e => setmodel({...model, email: e})}
                  placeholderTextColor="gray"
                  placeholder="Enter Email"
                />
              </View>
              <View style={[styles.mb2]}>
                <Text style={[styles.fs5, styles.textBlack, styles.pb1]}>
                  Password
                </Text>
                <TextInput
                  style={[
                    styles.border1,
                    styles.textBlack,
                    styles.ps2,
                    styles.rounded,
                  ]}
                  onChangeText={e => setmodel({...model, password: e})}
                  placeholderTextColor="gray"
                  placeholder="Enter Password"
                />
              </View>
            </View>
            <View style={[styles.rounded]}>
              <ReactButton
                onPress={() => {
                  navigation.navigate('Home');
                }}
                label="Sign in"
              />
            </View>

            {/* New Account text  */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Signup');
              }}
            >
              <Text style={[styles.fs5, styles.textBlack, styles.textRight]}>
                Create New Account!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default Login;
