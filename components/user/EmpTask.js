import { StyleSheet, Text, FlatList, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../../assets/colors';
import { fonts } from '../../assets/fonts';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

export default function EmpTask() {
  const navigation = useNavigation();

  // Sample data for tasks
  const initialTasks = [
    { id: '1', name: 'Task 1', project: 'Project Alpha', status: 'In Progress' },
    { id: '2', name: 'Task 2', project: 'Project Beta', status: 'Completed' },
    { id: '3', name: 'Task 3', project: 'Project Gamma', status: 'On Hold' },
  ];

 
  const [tasks, setTasks] = useState(initialTasks);


  const updateTaskStatus = (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    });
    setTasks(updatedTasks);
  };


  const renderTaskItem = ({ item }) => (
    <View style={styles.taskItem}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ flexDirection: 'column' }}>
          <Text style={styles.taskName}>{item.name}</Text>
          <Text style={styles.taskProject}>{item.project}</Text>
          <Text style={styles.taskStatus}>{item.status}</Text>
        </View>
        <View style={styles.actionButtons}>
          {item.status !== 'Completed' && (
            <TouchableOpacity
              style={styles.completeButton}
              onPress={() => updateTaskStatus(item.id, 'Completed')}
            >
              <FontAwesome5 name="check" color={colors.white} size={16} />
              <Text style={styles.buttonText}>Complete</Text>
            </TouchableOpacity>
          )}
          {item.status !== 'In Progress' && (
            <TouchableOpacity
              style={styles.progressButton}
              onPress={() => updateTaskStatus(item.id, 'In Progress')}
            >
              <FontAwesome5 name="spinner" color={colors.white} size={16} />
              <Text style={styles.buttonText}>In Progress</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );

  return (
    <View style={{ backgroundColor: colors.white, height: '100%' }}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>My Tasks</Text>
      </View>

      <View style={styles.myTask}>
        <FlatList
          data={tasks}
          renderItem={renderTaskItem}
          keyExtractor={(item) => item.id}
          style={styles.taskList}
        />
      </View>
    </View>
  );
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
    marginStart: 5,
  },
  myTask: {
    borderRadius: 15,
    shadowColor: 'black',
    elevation: 5,
    margin: 10,
    backgroundColor: colors.white,
    padding: 15,
  },
  taskList: {
    flexGrow: 0,
  },
  taskItem: {
    backgroundColor: colors.lightGray,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: 'black',
    elevation: 5,
    borderColor: 'black',
    borderWidth: 1,
    width: '99%',
  },
  taskName: {
    fontSize: 18,
    color: 'black',
    fontFamily: fonts.Light,
  },
  taskProject: {
    fontSize: 14,
    color: colors.secondary,
    fontFamily: fonts.Light,
  },
  taskStatus: {
    fontSize: 14,
    color: colors.primary,
    fontFamily: fonts.Light,
  },
  actionButtons: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  completeButton: {
    borderRadius: 5,
    backgroundColor: colors.primary,
    marginHorizontal: 5,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressButton: {
    borderRadius: 5,
    backgroundColor: colors.primary,
    marginHorizontal: 5,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontFamily: fonts.semiBold,
    marginLeft: 5,
  },
});
