import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AddProject from './Sreens/AddProject'
import AddUser from './Sreens/AddUser'
import Reports from './Sreens/Reports'
import AdminDashboard from './Sreens/AdminDashboard'
import AddTask from './Sreens/AddTask'
import Octicons from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from '../../assets/colors'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'


const Tab = createBottomTabNavigator()
const ManagerHome = () => {
    const navigation = useNavigation()
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 25
                    , right: 25,
                    elevation: 0,
                    backgroundColor: colors.white,
                    height: 90,
                    borderRadius: 15,
                    ...styles.shadow
                },
                tabBarShowLabel: false,

            }}

        >
            <Tab.Screen name='AdminHome' component={AdminDashboard}
                options={{
                    tabBarIcon: ({ focused }) =>
                    (<View style={styles.tabView}>
                        <Ionicons name={'home-outline'} color={focused ? colors.primary : colors.secondary} size={20} />
                        <Text style={[styles.tabText, { color: focused ? colors.primary : colors.secondary }]}>Home</Text>
                    </View>),
                    headerShown: true,
                    headerRight: () =>
                        <TouchableOpacity style={{ marginRight: 15, alignItems: 'center' }} onPress={() => navigation.navigate('Login')}>
                            <Ionicons name="log-out-outline" size={30} color={colors.primary} />
                            <Text style={{ textAlign: 'center', fontSize: 10 }}>Logout</Text>
                        </TouchableOpacity>
                }
                } />
            <Tab.Screen name='AddProject' component={AddProject} options={{
                tabBarIcon: ({ focused }) =>
                    <View style={styles.tabView}>
                        <Octicons name={'project'} color={focused ? colors.primary : colors.secondary} size={20} />
                        <Text style={[styles.tabText, { color: focused ? colors.primary : colors.secondary }]}>Work</Text>
                    </View>

            }} />

            <Tab.Screen name='AddTask' component={AddTask} options={{
                tabBarIcon: ({ focused }) =>
                    <View style={styles.tabView}>
                        <FontAwesome5 name={'tasks'} color={focused ? colors.primary : colors.secondary} size={20} />
                        <Text style={[styles.tabText, { color: focused ? colors.primary : colors.secondary }]}>Task</Text>
                    </View>

            }} />
            <Tab.Screen name='Reports' component={Reports} options={{
                tabBarIcon: ({ focused }) =>
                    <View style={styles.tabView}>
                        <Ionicons name={'analytics-sharp'} color={focused ? colors.primary : colors.secondary} size={20} />
                        <Text style={[styles.tabText, { color: focused ? colors.primary : colors.secondary }]}>Data</Text>
                    </View>

            }} />

        </Tab.Navigator>
    )
}

export default ManagerHome

const styles = StyleSheet.create({
    shadow: {
        shadowColor: 'black',
        elevation: 5
    },
    tabView: {
        alignItems: 'center',
        justifyContent: 'center',
        top: 20,
        flexDirection: 'column',
    },
    tabText: {
        marginTop: 5,
        fontSize: 10
    }
})