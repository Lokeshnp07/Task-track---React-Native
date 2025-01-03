import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../assets/colors'
import { useNavigation } from '@react-navigation/native'
import { fonts } from '../assets/fonts'

export default function Home(props) {
  const navigation=useNavigation()
  const handleLogin=()=>{
    navigation.navigate('Login')
  }
    // const (name,age)=props.route.params;
  return (
    <View style={{ }}>
      {/* <Text style={{ fontSize: 20 }}>This is home screen</Text>
      <Text style={{ fontSize: 20 }}>Name: {props.route.params.name}</Text>
      <Text style={{ fontSize: 20 }}>Age: {props.route.params.age}</Text>
      <Text style={{ fontSize: 20 }}>Age: {props.route.params.email}</Text> */}
      <Image source={require('../assets/drawable/TTlogo.png') } style={styles.logo}/>
      <Image source={require('../assets/drawable/manimage.png') } style={styles.manimage}/>
      <Text style={styles.text}>Project & Task Management</Text>
      <Text style={styles.subtitle}>Welcome to your ultimate project and task management solution designed to help individuals and teams stay organized and productive. With our intuitive interface, you can easily create, assign, and track tasks, ensuring that every project is completed on time and within scope. </Text>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.buttonWrapper} onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} 
        onPress={()=>navigation.navigate('Register')}
        >
          <Text style={styles.signupText}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  main:{
    flex: 1 ,
    alignItems: 'center',
    backgroundColor:'colors.white'
  },
  logo:{
    height:60,
    width:130 ,
    marginTop:30
    ,
    justifyContent:'center',alignSelf:'center'
  },
  manimage:{
    height:250,
    width:250,
    marginTop:40,
    alignSelf:'center'
  },
  text:{
    fontSize:40,
    textAlign:'center',
    marginTop:40,
    color:colors.primary,
    fontFamily:fonts.Bold

  },
  subtitle:{
    fontSize:12,
    marginTop:20,
    paddingHorizontal:20,
    textAlign:'center',
    color:colors.secondary,
    fontFamily:fonts.Light
  },
  buttonView:{
    flexDirection:'row',
    alignSelf:'center',
    marginTop:40,
    borderWidth:2,
    width:'80%',
    height:59,
    borderRadius:100

  },
  buttonWrapper:{
    backgroundColor:colors.primary,
    width:'50%',
    borderRadius:100,
    justifyContent:'center',
    height:'100%'
    },
  loginText:{
    textAlign:'center',
    color:colors.white,
    fontSize:15,
    fontFamily:fonts.semiBold
  },
  signupText:{
    textAlign:'center',
    color:colors.primary,
    fontSize:15,
    fontFamily:fonts.semiBold
  },
  button:{
    width:'50%',
    borderRadius:100,
    justifyContent:'center'
  }
})