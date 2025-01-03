import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Octicons from 'react-native-vector-icons/Octicons';
import { colors } from '../../assets/colors';
import EmpTask from './EmpTask';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EmpProject from './EmpProject';
import EmpProfile from './EmpProfile';
import Fontisto from 'react-native-vector-icons/Fontisto'

const BTab = createBottomTabNavigator();

const EmpDashboard = () => {
  return (
    <BTab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 25,
          right: 25,
          elevation: 0,
          backgroundColor: colors.white,
          height: 90,
          borderRadius: 15,
          ...styles.shadow,
          margin:10,
          borderColor:colors.grey,
          borderWidth:1
        },
        tabBarShowLabel: false,
      }}
    >
      <BTab.Screen
        name="EmpHome"
        component={EmpProject}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabView}>
              <Octicons
                name="project"
                color={focused ? colors.primary : colors.secondary}
                size={20}
              />
              <Text
                style={{
                  fontSize: 10,
                  color: focused ? colors.primary : colors.secondary,
                  width:40,
                  textAlign:'center'
                }}
              >
                Project
              </Text>
            </View>
          ),
        }}
      />
      <BTab.Screen name="EmpTask" component={EmpTask}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabView}>
              <FontAwesome5 name="tasks" size={20} color={focused ? colors.primary : colors.secondary}/>
              <Text
                style={{
                  fontSize: 10,
                  color: focused ? colors.primary : colors.secondary,
                }}
              >
                Task
              </Text>
            </View>
          ),
        }}
      />

      <BTab.Screen name='Profile' component={EmpProfile} options={{
        tabBarIcon:({focused})=>
          <View style={styles.tabView}>
            <Fontisto name={'person'} size={20} color={focused?colors.primary:colors.secondary}/>
            <Text style={{fontSize: 10,
                  color: focused ? colors.primary : colors.secondary,width:40,textAlign:'center'}}>Profile</Text>
          </View>
      }}/>
    </BTab.Navigator>
    
  );
};

export default EmpDashboard;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    elevation: 5,
  },
  tabView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    top:20
  },
});
