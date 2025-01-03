import { View, Text, Button, TextInput, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { colors } from '../assets/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import { fonts } from '../assets/fonts';

const Register = () => {

  const navigation = useNavigation()

  const [viewPassword, setViewPassword] = useState(true)
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [dialogBox, setDialogBox] = useState(false)
  const user = {
    admin: {
      email: 'admin@gmail.com',
      pass: 'admin@123'
    },
    manager: {
      email: 'manager@gmail.com',
      pass: 'manager@123'
    },
    emp: {
      email: 'emp@gmail.com',
      pass: 'emp@123'
    }
  }

  const validateUser = () => {
    if (email == user.admin.email && pass == user.admin.pass)
      navigation.navigate('AdminHome')
    else if (email == user.manager.email && pass == user.manager.pass)
      navigation.navigate('ManagerHome')
    else if (email == user.emp.email && pass == user.emp.pass)
      navigation.navigate('EmpDashboard')
    else
      alert('invalid credentials..!!')
  }

  return (
    <View>
      <TouchableOpacity style={{ margin: 5 }} onPress={() => navigation.navigate('Home')}>
        <Entypo name={'arrow-with-circle-left'} color={colors.primary} size={40} />
      </TouchableOpacity>

      <View style={{ marginTop: 20 }}>
        <Text style={styles.headingText}>Let's get,</Text>
        <Text style={styles.headingText}>Started</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <MaterialIcons name={'alternate-email'} size={20} color={colors.secondary} />
          <TextInput
            style={styles.textInput}
            placeholder='Enter your email'
            placeholderTextColor={colors.secondary}
            keyboardType='email-address'
            value={email}
            onChangeText={(text) => setEmail(text)} />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name={'phone-portrait-outline'} size={20} color={colors.secondary} />
          <TextInput
            style={styles.textInput}
            placeholder='Enter your phone number'
            placeholderTextColor={colors.secondary}
            keyboardType='phone' />
        </View>

        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name={'onepassword'} size={20} color={colors.secondary} />
          <TextInput
            style={styles.textInput}
            placeholder='Enter your password'
            placeholderTextColor={colors.secondary}
            secureTextEntry={viewPassword}
            value={pass}
            onChangeText={(text) => setPass(text)} />

          <TouchableOpacity onPress={() => setViewPassword(!viewPassword)}>
            <Ionicons name={viewPassword ? 'eye-outline' : 'eye-off-outline'} size={20} color={colors.secondary} />
          </TouchableOpacity>
        </View>
      </View>


      <TouchableOpacity style={styles.loginContainer} onPress={validateUser} >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.continueText}>or continue with</Text>

      <Modal
        transparent={true}
        animationType="slide"
        visible={dialogBox}>
        <View style={styles.dialogWrapper}>
          <View style={styles.dialog}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setDialogBox(!dialogBox)}>
              <Ionicons name="close-outline" size={30} color={colors.secondary} />
            </TouchableOpacity>
            <Text style={styles.dialogTitle}>Select an Account</Text>
            <Text style={styles.dialogSubtitle}>
              Continue with one of the accounts below:
            </Text>
            <TouchableOpacity style={styles.emailButton}>
              <Text style={styles.emailText}>{user.admin.email}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.emailButton}>
              <Text style={styles.emailText}>{user.manager.email}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.emailButton}>
              <Text style={styles.emailText}>{user.emp.email}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.googleButton} onPress={() => setDialogBox(!dialogBox)}>
        <Image source={require('../assets/drawable/googlelogo.png')} style={styles.googlelogo} />
        <Text style={styles.googleText}>Google</Text>
      </TouchableOpacity>

      <View style={styles.gotoReg}>
        <Text style={{ color: colors.secondary, textAlign: 'center', fontFamily: fonts.Light }}>Already have a account?</Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 15, marginStart: 2, fontFamily: fonts.semiBold }} onPress={() => navigation.navigate('Login')}>Login</Text>

        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Register


const styles = StyleSheet.create({
  dialogWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  dialog: {
    width: '80%',
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    padding: 5,
  },
  dialogTitle: {
    fontSize: 22,
    fontFamily: fonts.Bold,
    color: colors.primary,
    marginBottom: 10,
  },
  dialogSubtitle: {
    fontSize: 16,
    fontFamily: fonts.Light,
    color: colors.secondary,
    textAlign: 'center',
    marginBottom: 20,
  },
  emailButton: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  emailText: {
    fontSize: 16,
    fontFamily: fonts.Light,
    color: colors.primary,
  }, headingText: {
    fontSize: 30,
    marginStart: 10,
    color: colors.primary,
    fontFamily: fonts.Bold
  },
  formContainer: {
    marginTop: 30,
    padding: 10
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
    paddingEnd: 10
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily: fonts.Light
  },
  loginContainer: {
    borderWidth: 1,
    borderColor: colors.primary,
    width: '80%',
    margin: 40,
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: colors.primary
  },
  loginText: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.white,
    fontFamily: fonts.semiBold
  },
  continueText: {
    textAlign: 'center',
    color: colors.secondary,
    fontFamily: fonts.Light
  },
  googleButton: {
    flexDirection: 'row',
    borderWidth: 2,
    padding: 10,
    marginTop: 20,
    width: '80%',
    borderRadius: 100,
    justifyContent: 'center',
    marginStart: 40,

  },
  googlelogo: {
    height: 20,
    width: 20
  },
  googleText: {
    color: colors.primary,
    fontSize: 15,
    marginStart: 5,
    fontFamily: fonts.semiBold
  },
  gotoReg: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})