import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { fonts } from '../../assets/fonts'
import { colors } from '../../assets/colors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

const EmpProfile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <Text style={[styles.heading, { fontFamily: fonts.Bold }]}>Profile</Text> */}

      <View style={styles.imageContainer}>
        <Image source={require('../../assets/drawable/profileImg.png')} style={styles.profileImg} />
      </View>
      <TouchableOpacity >
        <Text style={styles.editPriofile}>edit profile</Text>
      </TouchableOpacity>

      <View style={styles.profileContainer}>
        <View style={{ flexDirection: 'row',alignItems:'center' }}>
          <Text style={{ fontFamily: fonts.Light, color: colors.secondary,marginRight:190 }}>Software Developer</Text>
          <TouchableOpacity style={styles.editButton}>
            <FontAwesome5 name='user-edit' size={25} color={colors.primary} />
          </TouchableOpacity>
        </View>

        <Text style={styles.name}>Employee name</Text>
        <Text style={{ fontFamily: fonts.Light, color: colors.primary }}>+91 1234567890</Text>
        <Text style={{ fontFamily: fonts.Light, color: colors.primary }}>employee@gamil.com</Text>

        <TouchableOpacity style={styles.logout} onPress={() => navigation.navigate('Login')}>
          <AntDesign name='logout' color={'red'} size={20} />
          <Text style={{ color: colors.primary, fontFamily: fonts.Light, paddingStart: 5 }}>LogOut</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default EmpProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white
  },
  heading: {
    fontSize: 30,
    color: colors.primary,
    textAlign: 'center',
    margin: 10
  },
  imageContainer: {
    height: 150,
    borderRadius: 100,
    width: 150,
    backgroundColor: colors.white,
    shadowColor: 'black',
    elevation: 5,
    alignSelf: 'center',
    padding: 2
  },
  profileImg: {
    height: '100%',
    width: '100%'
  },
  editPriofile: {
    color: colors.secondary,
    fontFamily: fonts.Light,
    textAlign: 'center',
    marginTop: 5
  },
  profileContainer: {
    shadowColor: 'black',
    backgroundColor: colors.white,
    elevation: 5,
    borderRadius: 15,
    marginTop: 10,
    padding: 10
  },
  editButton: {
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  name: {
    fontFamily: fonts.Bold,
    color: colors.primary,
    fontSize: 20
  },
  logout: {
    flexDirection: 'row',
    borderColor: colors.secondary,
    borderWidth: 1,
    padding: 10,
    borderRadius: 15,
    width: 'auto',
    alignItems: 'center',
    alignSelf: 'center',
    margin:10
  }

})