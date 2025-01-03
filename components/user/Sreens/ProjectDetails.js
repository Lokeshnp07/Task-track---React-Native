import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { colors } from '../../../assets/colors';
import { fonts } from '../../../assets/fonts';

const ProjectDetails = () => {
  const route = useRoute();
  const { project } = route.params; // Assuming project data is passed as a parameter

  return (
    <ScrollView style={styles.container}>
      {/* Project Details Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Project Details</Text>
        {/* <Text style={styles.cardText}><strong>Name:</strong> {project.name}</Text>
        <Text style={styles.cardText}><strong>Status:</strong> {project.status}</Text>
        <Text style={styles.cardText}><strong>Start Date:</strong> {project.startDate}</Text>
        <Text style={styles.cardText}><strong>End Date:</strong> {project.endDate}</Text>
        <Text style={styles.cardText}><strong>Project Manager:</strong> {project.projectManager}</Text>
        <Text style={styles.cardText}><strong>Description:</strong> {project.description}</Text> */}

        <Text style={styles.cardText}>Name:Car Wash</Text>
        <Text style={styles.cardText}>Status: Pending</Text>
        <Text style={styles.cardText}>Start Date: 28/8/2024</Text>
        <Text style={styles.cardText}>End Date:5/12/2025</Text>
        <Text style={styles.cardText}>Project Manager:Lokesh</Text>
        <Text style={styles.cardText}>Description:  determine which native SDK version your project uses</Text>
      </View>

      {/* Project Members Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Project Members</Text>
        {/* {project.teamMembers.map((member, index) => (
          <Text key={index} style={styles.cardText}>{member}</Text>
        ))} */}
      </View>

      {/* Tasks Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Tasks</Text>
        {/* {project.tasks.map((task, index) => (
          <Text key={index} style={styles.cardText}>{task}</Text>
        ))} */}
      </View>
    </ScrollView>
  );
};

export default ProjectDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: 'black',
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    marginBottom: 10,
    color: colors.primary,
    fontFamily:fonts.Bold
  },
  cardText: {
    fontSize: 16,
    color: colors.secondary,
    marginBottom: 5,
    fontFamily:fonts.Light
  },
});