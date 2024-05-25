import { Image, ScrollView, StyleSheet, Text, View, useColorScheme } from "react-native";
import React, { useEffect, useState } from 'react'
import { Link } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import { loadFonts } from "../assets/fonts/fonts.js"
import { Fonts } from "@/constants/Fonts";
import Wave from "@/components/Wave";
import AnimatedButton from "../components/AnimatedButton.tsx";

const introductionGuy = require("../assets/images/Introduction-people-1.png");

const Index: React.FC = () => {
  const colorScheme = useColorScheme();
  const colors = colorScheme === 'dark' ? ['#0d110e', '#3f4a47',] : ["#ecf1ed", "#B3BDB5"];
  const invertedColors = colorScheme === 'dark' ? ["#ecf1ed", "#B3BDB5"] : ['#0d110e', '#3f4a47'];
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    const loadAsyncFonts = async () => {
      await loadFonts();
      setFontsLoaded(true);
    };

    loadAsyncFonts();
  }, []);

  return (
    <LinearGradient
      style={styles.linearGradient}
      colors={colors}
      end={{ x: 0.5, y: 0.5 }}
    >
      <Wave position="top" color={invertedColors[0]} />
      <View style={styles.spacingView}></View>
      <View style={styles.imageContainer}>
        <Image source={introductionGuy} style={styles.introductionLogo} />
      </View>
      {fontsLoaded &&
        <Text style={{
          fontFamily: Fonts.title.fontName,
          fontSize: Fonts.title.fontSize,
          textAlign: Fonts.title.textAlign,
          flex: 3,
          padding: Fonts.title.padding,
          color: colorScheme === 'dark' ? 'white' : 'black'
        }}
        >

          <Link href="/exercise-routine">
            Sua rotina de saúde balanceada
          </Link>
        </Text>
      }
      <Wave position="bottom" color={invertedColors[1]} />
      {/* <AnimatedButton buttonPosition="absolute" color={invertedColors[0]} /> */}
    </LinearGradient >
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
    flex: 3,
    width: 350,
    height: 350,
  },
  introductionLogo: {
    width: 350,
    height: 350
  },
  spacingView: {
    flex: 2
  },
})

export default Index;