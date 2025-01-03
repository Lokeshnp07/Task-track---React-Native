import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../../../assets/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { fonts } from '../../../assets/fonts';

const AddUser  = () => {
  const [showPass, setShowPass] = useState(true);
  const [showConfirmPass, setShowConfirmPass] = useState(true);


  return (
    <View style={styles.container}>
      <ScrollView>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name={'person'} size={20} color={colors.secondary} />
          <TextInput
            style={styles.inputText}
            placeholder='Enter Your name'
            placeholderTextColor={colors.secondary}
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name={'alternate-email'} size={20} color={colors.secondary} />
          <TextInput
            style={styles.inputText}
            placeholder='Enter Your email'
            placeholderTextColor={colors.secondary}
            keyboardType='email-address'
          />
        </View>

        <View style={styles.inputContainer}>
          <Fontisto name={'persons'} size={20} color={colors.secondary} />
          <TextInput
            style={styles.inputText}
            placeholder='Enter Your role'
            placeholderTextColor={colors.secondary}
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name={'password'} size={20} color={colors.secondary} />
          <TextInput
            style={styles.inputText}
            placeholder='Enter Your password'
            placeholderTextColor={colors.secondary}
            secureTextEntry={showPass}
          />
          <TouchableOpacity onPress={() => setShowPass(!showPass)}>
            <Ionicons name={showPass ? 'eye-outline' : 'eye-off-outline'} size={20} color={colors.secondary} />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name={'form-textbox-password'} size={20} color={colors.secondary} />
          <TextInput
            style={styles.inputText}
            placeholder='Confirm password'
            placeholderTextColor={colors.secondary}
            secureTextEntry={showConfirmPass}
          />
          <TouchableOpacity onPress={() => setShowConfirmPass(!showConfirmPass)}>
            <Ionicons name={showConfirmPass ? 'eye-outline' : 'eye-off-outline'} size={20} color={colors.secondary} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.submit}>
          <Text style={{fontSize:20,color:colors.white,fontFamily:fonts.semiBold}}>submit</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
};

export default AddUser ;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    color: colors.primary,
    marginStart: 20,
  },
  container: {
    flex: 1,
  },
  formContainer: {
    margin: 10,
    padding: 10,
  },
  inputContainer: {
    borderWidth: 2,
    height: 55,
    borderRadius: 100,
    borderColor: colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    padding: 2,
    paddingStart: 10,
    paddingEnd: 10,
  },
  inputText: {
    flex: 1,
  paddingHorizontal: 10,
  fontFamily:fonts.Light
  },
  submit:{
    borderRadius:15,
    borderWidth:2,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    width:'50%',
    marginTop:10,
    backgroundColor:colors.primary,
    alignSelf:'center'
  }
});
