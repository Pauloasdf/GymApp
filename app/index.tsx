import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";
import React from 'react'
import { Link } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import introductionLogo from "../assets/images/Introduction-icon.png";

export default function Index() {
  const colorScheme = useColorScheme();
  return (
    <View>
      <LinearGradient
        style={styles.linearGradient}
        colors={colorScheme === 'dark' ? ['#0d110e', '#3f4a47',] : ["#ecf1ed", "#B3BDB5"]}
        end={{ x: 0.5, y: 0.5 }}
      >
        <View style={styles.spacingView}></View>
        <View style={styles.imageContainer}>
          <Image source={introductionLogo} style={styles.introductionLogo} />
        </View>
        <Text style={{ flex: 6, color: colorScheme === 'dark' ? 'white' : 'black' }}
        >
          <Link href="/exercise-routine">Bem vindo!</Link>
        </Text>
      </LinearGradient >
    </View >
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    height: "100%"
  },
  imageContainer: {
    flex: 2,
    width: 150,
    height: 150
  },
  introductionLogo: {
    width: 150,
    height: 150
  },
  spacingView: {
    flex: 2
  },
})
