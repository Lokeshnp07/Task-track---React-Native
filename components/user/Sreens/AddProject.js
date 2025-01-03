import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Platform } from 'react-native';
import React, { useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { colors } from '../../../assets/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import { fonts } from '../../../assets/fonts';
import { Picker } from '@react-native-picker/picker';


const AddProject = () => {

  const members = ['Member 1', 'Member 2', 'Member 3'];

  const navigation = useNavigation();

  const [projectName, setProjectName] = useState('');
  const [status, setStatus] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [projectManager, setProjectManager] = useState('');
  const [teamMembers, setTeamMembers] = useState('');
  const [description, setDescription] = useState('');
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
    const [member, setMember] = useState('');
  

  const onChangeStartDate = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    setShowStartDatePicker(false);
    setStartDate(currentDate);
  };

  const onChangeEndDate = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    setShowEndDatePicker(false);
    setEndDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <MaterialIcons name={'assignment'} size={20} color={colors.secondary} />
          <TextInput
            style={styles.textInput}
            placeholder='Project Name'
            placeholderTextColor={colors.secondary}
            value={projectName}
            onChangeText={setProjectName}
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name={'info'} size={20} color={colors.secondary} />
          <TextInput
            style={styles.textInput}
            placeholder='Status'
            placeholderTextColor={colors.secondary}
            value={status}
            onChangeText={setStatus}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name={'calendar'} size={20} color={colors.secondary} />
          <TouchableOpacity onPress={() => setShowStartDatePicker(true)} style={styles.textInput}>
            <Text style={{ color: colors.secondary }}>{startDate.toLocaleDateString()}</Text>
          </TouchableOpacity>
        </View>

        {showStartDatePicker && (
          <DateTimePicker
            value={startDate}
            mode="date"
            display="default"
            onChange={onChangeStartDate}
          />
        )}

        <View style={styles.inputContainer}>
          <Ionicons name={'calendar'} size={20} color={colors.secondary} />
          <TouchableOpacity onPress={() => setShowEndDatePicker(true)} style={styles.textInput}>
            <Text style={{ color: colors.secondary }}>{endDate.toLocaleDateString()}</Text>
          </TouchableOpacity>
        </View>

        {showEndDatePicker && (
          <DateTimePicker
            value={endDate}
            mode="date"
            display="default"
            onChange={onChangeEndDate}
          />
        )}

        <View style={styles.inputContainer}>
          <MaterialIcons name={'person'} size={20} color={colors.secondary} />
          <TextInput
            style={styles.textInput}
            placeholder='Project Manager'
            placeholderTextColor={colors.secondary}
            value={projectManager}
            onChangeText={setProjectManager}
          />
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

        <View style={styles.inputContainer}>
          <MaterialIcons name={'description'} size={20} color={colors.secondary} />
          <TextInput
            style={styles.textInput}
            placeholder='Description'
            placeholderTextColor={colors.secondary}
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={() => {/* Handle project submission */ }}>
        <Text style={styles.submitText}>Add Project</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddProject;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  headingText: {
    fontSize: 30,
    color: colors.primary,
  },
  formContainer: {
    padding: 10,
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
    paddingEnd: 10,
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontFamily:fonts.Light
  },
  submitButton: {
    borderWidth: 1,
    borderColor: colors.primary,
    width: '60%',
    marginTop: 10,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: colors.primary,
    alignSelf:'center'
  },
  submitText: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.white,
    fontFamily:fonts.semiBold,
    paddingHorizontal:2
  },
  picker: {
    flex: 1,
    height: 55,
    color: colors.secondary,
    textAlign:'center'
  },
});