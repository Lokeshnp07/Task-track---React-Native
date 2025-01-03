import { StyleSheet, Text, FlatList, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../../assets/colors'
import { fonts } from '../../assets/fonts'
import Octicons from 'react-native-vector-icons/Octicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native';


export default function EmpProject  ()  {
  const navigation = useNavigation();

    // Sample data for projects
      const projects = [
        { id: '1', name: 'Project Alpha', status: 'In Progress' },
        { id: '2', name: 'Project Beta', status: 'Completed' },
        { id: '3', name: 'Project Gamma', status: 'On Hold' },
      ];
    
      const renderProjectItem = ({ item }) => (
        <View style={styles.projectItem}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.projectName}>{item.name}</Text>
              <Text style={styles.projectStatus}>{item.status}</Text>
            </View>
            <TouchableOpacity 
              style={styles.viewButton} 
              onPress={() => navigation.navigate('ProjectDetails', { projectId: item.id })}
            >
              <FontAwesome5 name={'folder'} color={colors.white} size={20} />
              <Text style={{ color: colors.white,fontFamily:fonts.semiBold }}>View</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    
  return (
    <View style={{ backgroundColor: colors.white ,height:'100%'}}>
            <View style={styles.heading}><Text style={styles.headingText}>Welcome </Text></View>

            <View style={styles.cardWrapper}>
                <View style={styles.cardContainer}>
                    <View style={styles.projectCard}>
                        <Text style={{ fontSize: 40, fontFamily: fonts.semiBold ,color:colors.primary}}>0</Text>
                        <Text style={{ fontSize: 15, fontFamily: fonts.Light }}>Total Project</Text>
                    </View>
                    <Octicons name={'stack'} color={colors.secondary} size={40} />
                </View>

                <View style={styles.cardContainer}>
                    <View style={styles.projectCard}>
                        <Text style={{ fontSize: 40, fontFamily: fonts.semiBold ,color:colors.primary}}>0</Text>
                        <Text style={{ fontSize: 15, fontFamily: fonts.Light }}>Total Task</Text>
                    </View>
                    <FontAwesome5 name={'tasks'} color={colors.secondary} size={40} />
                </View>
            </View>
            <View style={styles.myProject}>
                <Text style={styles.myProjectText
                }>My Projects</Text>

                <FlatList
                          data={projects}
                          renderItem={renderProjectItem}
                          keyExtractor={item => item.id}
                          style={styles.projectList}
               />
            </View>
        </View>
  )
}



const styles = StyleSheet.create({
  heading: {
      borderRadius: 15,
      margin: 10,
      shadowColor: 'black',
      elevation: 10,
      justifyContent: 'flex-start',
      padding: 10,
      height: 70,
      backgroundColor: colors.white,
  },
  headingText: {
      fontSize: 20,
      fontFamily: fonts.Bold,
      color: colors.primary,
      marginTop: 5,
      marginStart: 5
  },
  cardWrapper: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      margin: 10,
  },
  cardContainer: {
      height: 100,
      backgroundColor: colors.white,
      borderRadius: 15,
      shadowColor: 'black',
      elevation: 5,
      width: '49%',
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
  },
  projectCard: {
      flexDirection: 'column',
      margin: 5
  },
  myProject: {
     
      borderRadius: 15,
      shadowColor: 'black',
      elevation: 5,
      margin: 10,
      backgroundColor: colors.white,
   
      padding:15
  },
  myProjectText:{
      fontFamily:fonts.Regular,
      fontSize:20,
      marginBottom:10,
      borderBottomColor:'balck',
      borderBottomWidth:1,
      padding:5,
      color:colors.primary
  },
  projectList: {
      flexGrow: 0,
    },
    projectItem: {
      backgroundColor: colors.lightGray,
      padding: 15,
      borderRadius: 10,
      marginBottom: 10,
      shadowColor:'black',
      elevation:5,
      borderColor:'black',
      borderWidth:1,
      width:'99%',
     
    },
    projectName: {
      fontSize: 18,
      color: 'black',
      fontFamily:fonts.Light
    },
    projectStatus: {
      fontSize: 14,
      color: colors.secondary,
      fontFamily:fonts.Light
    },
    viewButton:{
      borderRadius:5,
      backgroundColor:colors.primary,
      width:80,
      padding:10,
      flexDirection:'row',
      justifyContent:'space-between',
    
    }
})