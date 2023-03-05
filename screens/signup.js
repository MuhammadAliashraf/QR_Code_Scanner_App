import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { ReactButton } from '../components/reactbutton';
import styles from '../styling/NativeStyling';

function Signup({navigation}) {
  const [model, setmodel] = useState([]);

  return (
    <View>
    <View style={[styles.p2, styles.bgWhite, styles.h100]}>
      <View>
        <View>
          <View style={[styles.alignItemsCenter, styles.mt2]}>
            <Image
              source={require('../assets/logo.jpg')}
              style={{width: 140, height: 150}}
            />
          </View>
        </View>

        {/* Text input  */}
        <View style={[styles.pt2]}>
          <View style={[styles.mb2,]}>
            <Text style={[styles.fs5, styles.textBlack, styles.pb1]}>
              Username
            </Text>
            <TextInput
              style={[
                styles.border1,
                styles.textBlack,
                styles.ps2,
                styles.rounded,
              ]}
              onChangeText={e => setmodel({...model, username: e})}
              placeholderTextColor="gray"
              placeholder="Enter Username"
            />
          </View>
          <View style={[styles.mb2,]}>
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

        {/* button  */}
        <View style={[styles.rounded]}>
          <ReactButton
            onPress={() => {
              navigation.navigate('Home');
              // loginFunction();
            }}
            label="Sign in"
          />
        </View>
        <View>
          <Text style={[styles.textBlack,styles.textCenter,styles.fs4]} >OR</Text>
        </View>
        {/* New Account text  */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          <Text style={[styles.fs5, styles.textBlack, styles.textCenter,styles.mt1]}>
           Already Have an Account!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  )
}

export default Signup
