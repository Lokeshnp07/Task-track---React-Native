import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../../../assets/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { fonts } from '../../../assets/fonts';

const AddTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [dueDate, setDueDate] = useState(new Date());
  const [priority, setPriority] = useState('Medium');
  const [project, setProject] = useState('');
  const [member, setMember] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Sample data for projects and members
  const projects = ['Project A', 'Project B', 'Project C'];
  const members = ['Member 1', 'Member 2', 'Member 3'];

  const handleSubmit = () => {
    // Display an alert with the task details (for demonstration purposes)
    Alert.alert('Task Submitted', `Title: ${taskTitle}\nDescription: ${taskDescription}\nDue Date: ${dueDate.toLocaleDateString()}\nPriority: ${priority}\nProject: ${project}\nMember: ${member}`);
  };

  return (
    <View style={styles.container}>
      

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name={'clipboard'} size={20} color={colors.secondary} />
          <TextInput
            style={styles.inputText}
            placeholder='Task Title'
            placeholderTextColor={colors.secondary}
            value={taskTitle}
            onChangeText={setTaskTitle}
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name={'description'} size={20} color={colors.secondary} />
          <TextInput
            style={styles.inputText}
            placeholder='Task Description'
            placeholderTextColor={colors.secondary}
            value={taskDescription}
            onChangeText={setTaskDescription}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name={'calendar'} size={20} color={colors.secondary} />
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <Text style={styles.dateinputText}>
              {dueDate.toLocaleDateString()}
            </Text>
          </TouchableOpacity>
        </View>

        {showDatePicker && (
          <DateTimePicker
            value={dueDate}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              const currentDate = selectedDate || dueDate;
              setShowDatePicker(false);
              setDueDate(currentDate);
            }}
          />
        )}

        <View style={styles.inputContainer}>
          <Fontisto name={'star'} size={20} color={colors.secondary} />
          <Picker
            selectedValue={priority}
            style={styles.picker}
            onValueChange={(itemValue) => setPriority(itemValue)}
          >
            <Picker.Item label="Low" value="Low" />
            <Picker.Item label="Medium" value="Medium" />
            <Picker.Item label="High" value="High" />
          </Picker>
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name={'folder'} size={20} color={colors.secondary} />
          <Picker
            selectedValue={project}
            style={styles.picker}
            onValueChange={(itemValue) => setProject(itemValue)}
          >
            <Picker.Item label="Select Project" value="" />
            {projects.map((proj, index) => (
              <Picker.Item key={index} label={proj} value={proj} />
            ))}
          </Picker>
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name={'person'} size={20} color={colors.secondary} />
          <Picker
            selectedValue={member}
            style={styles.picker}
            onValueChange={(itemValue) => setMember(itemValue)}
          >
            <Picker.Item label="Select Member" value="" />
            {members.map((mem, index) => (
              <Picker.Item key={index} label={mem} value={mem} />
            ))}
          </Picker>
        </View>

        <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
          <Text style={{ fontSize: 20, color: colors.white ,fontFamily:fonts.semiBold}}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddTask;

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
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.secondary,
    borderWidth: 2,
    borderRadius: 100,
    padding: 2,
    height: 55,
    paddingStart: 10,
    paddingEnd: 10,
    marginTop: 10,
  },
  inputText: {
    flex: 1,
    paddingHorizontal: 10,
  },
  picker: {
    flex: 1,
    height: 55,
    color: colors.secondary,
    textAlign:'center'
  },
  submit: {
    borderRadius: 15,
    backgroundColor: colors.primary,
    padding: 10,
    alignItems: 'center',
    marginTop: 20,
    width:'50%',
    alignSelf:'center'
  },
  dateinputText:{
    paddingStart:10
  }
});