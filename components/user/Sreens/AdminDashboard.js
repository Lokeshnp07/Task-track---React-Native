
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../assets/colors';
import Octicons from 'react-native-vector-icons/Octicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { fonts } from '../../../assets/fonts';


const AdminDashboard = () => {
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
    <ScrollView style={styles.container}>
      <View style={styles.heading}><Text style={{ fontSize: 18,fontFamily:fonts.semiBold }}>Welcome to TaskTrack!</Text></View>

      <View style={{
        flexDirection: 'row', margin: 10, justifyContent: 'space-between'
      }}>
        <View style={styles.totalProject}>
          <View style={{ margin: 8 }}>
            <Text style={{ fontSize: 40, color: colors.primary ,fontFamily:fonts.Medium}}>0</Text>
            <Text style={{ fontSize: 15, color: colors.primary ,fontFamily:fonts.Light}}>Total Projects</Text>
          </View>
          <Octicons name={'stack'} color={colors.secondary} size={50} />
        </View>

        <View style={styles.totalProject}>
          <View style={styles.totalProView}>
            <Text style={{ fontSize: 40, color: colors.primary,fontFamily:fonts.Medium }}>0</Text>
            <Text style={{ fontSize: 15, color: colors.primary,fontFamily:fonts.Light  }}>Total Task</Text>
          </View>
          <FontAwesome5 name={'tasks'} color={colors.secondary} size={50} />
        </View>
      </View>


      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('CreateTask')}>
        <Text style={styles.addButtonText}>Add New Task</Text>
      </TouchableOpacity>

      <View style={styles.projectListContainer}>
        <Text style={styles.progressText}>Project Progress</Text>
        <FlatList
          data={projects}
          renderItem={renderProjectItem}
          keyExtractor={item => item.id}
          style={styles.projectList}
        />
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,

  },
  heading: {
    margin: 10,
    width: '100%',
    height: 50,
    padding: 10,
    borderBottomColor: 'black'
  },
  addButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
    width: '60%'
  },
  addButtonText: {
    color: colors.white,
    fontSize: 18,
    textAlign: 'center',
    fontFamily:fonts.semiBold
  },
  totalProject: {
    shadowColor: 'black',
    elevation: 5,
    flexDirection: 'row',
    width: '49%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,

    },
    backgroundColor: colors.white
  },
  totalProView: {
    margin: 18,
  },
//projectlist
  projectListContainer:{
    margin:10,
    backgroundColor:colors.white,
    borderRadius:10,
    shadowColor:'black',
    elevation:10,
    borderColor:'black',
    borderWidth:1,
    padding:10,
    marginTop:20
  },
  progressText:{
    fontSize:20,
    marginBottom:10,
    borderBottomColor:'black',
    borderBottomWidth:1,
    padding:5,
    fontFamily:fonts.Medium
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
    width:'99%'
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
    backgroundColor:colors.
    primary,
    width:80,
    padding:10,
    flexDirection:'row',
    justifyContent:'space-between',
  
  }
});

export default AdminDashboard;