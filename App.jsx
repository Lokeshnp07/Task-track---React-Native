import { View, Text, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AdminHome from './components/user/AdminHome';
import ProjectDetails from './components/user/Sreens/ProjectDetails';
import ManagerHome from './components/user/ManagerHome';
import EmpDashboard from './components/user/EmpDashboard';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        // headerTintColor: 'white',
        // headerStyle: {
        //   backgroundColor: 'blue'
        // },
        // headerTitleStyle: {
        //   fontSize: 20
        // }, headerTitleAlign: 'center',
        headerShown:false
      }}>

        <Stack.Screen name='Home' component={Home} options={{
          // headerTintColor: 'white',
          // headerStyle: {
          //   backgroundColor: 'orange'
          // },
          // headerTitleStyle: {
          //   fontSize: 20
          // },
          // headerRight:()=><Button title='::'/>
        }} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='UserHome' component={AdminHome} />
        <Stack.Screen name='ProjectDetails' component={ProjectDetails}/>
        <Stack.Screen name='ManagerHome' component={ManagerHome}/>
        <Stack.Screen name='EmpDashboard' component={EmpDashboard}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



