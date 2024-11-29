import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, useColorScheme, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { getColorGradient } from '@/constants/Colors';
import legDayBanner from "../../assets/images/leg-day-banner.png";
import CardItem from '@/components/CardItem';

const Header = (iconsColor: string, headerBGColor: string) => {
  return (
    <View style={[styles.header, { backgroundColor: headerBGColor }]}>
      {/* <Ionicons name="menu-outline" size={28} color={iconsColor} /> */}
      <View style={styles.headerRight}>
        <Ionicons name="notifications-outline" size={28} color={iconsColor} />
        {/* <Ionicons name="settings-outline" size={28} color={iconsColor} /> */}
      </View>
    </View>
  );
};
const Banner = () => {
  return (
    <View style={styles.banner}>
      <Text style={styles.bannerText}>Exercícios de hoje</Text>
      <Image source={legDayBanner} style={styles.bannerImage} />
    </View>
  );
};

const ExerciseList = () => {
  const [expandedItems, setExpandedItems] = useState([false, false, false, false]);

  const toggleExpand = (index) => {
    setExpandedItems((prevState) => {
      const newState = prevState.map((item, idx) => (idx === index ? !item : item));
      return newState;
    });
  };

  const exercises = [
    { icon: "fitness-center", name: "Agachamento", time: "4 séries - 12 reps", details: "O agachamento trabalha os músculos das pernas e glúteos." },
    { icon: "fitness-center", name: "Leg Press", time: "4 séries - 12 reps", details: "O leg press é ótimo para fortalecer as coxas e glúteos." },
    { icon: "fitness-center", name: "Extensão de Perna", time: "3 séries - 15 reps", details: "A extensão de perna foca no quadríceps." },
    { icon: "fitness-center", name: "Flexão de Perna", time: "3 séries - 15 reps", details: "A flexão de perna trabalha os músculos posteriores da coxa." },
  ];

  return (
    <ScrollView contentContainerStyle={styles.exerciseList}>
      {exercises.map((exercise, index) => (
        <CardItem
          key={index}
          icon={exercise.icon}
          name={exercise.name}
          time={exercise.time}
          details={exercise.details}
          showInteractionButtons="true"
          isExpanded={expandedItems[index]}
          onPress={() => toggleExpand(index)}
        />
      ))}
    </ScrollView>
  );
};

const ExerciseRoutine = () => {
  const colorScheme = useColorScheme();
  return (
    <View style={[styles.container, { backgroundColor: getColorGradient(colorScheme, false)[0] }]}>
      <ScrollView>
        <Banner />
        <ExerciseList />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerRight: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'flex-end',
  },
  banner: {
    marginTop: 20,
    alignItems: 'center',
  },
  bannerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
  },
  bannerImage: {
    width: '80%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: 10,
  },
  exerciseList: {
    paddingHorizontal: 16,
    marginTop: 20
  },
  exerciseSummary: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  exerciseDetails: {
    flex: 1,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  exerciseTime: {
    fontSize: 14,
    color: '#666666',
  },
  exerciseDetailsText: {
    fontSize: 12,
    color: '#999999',
    marginTop: 10,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ExerciseRoutine;
