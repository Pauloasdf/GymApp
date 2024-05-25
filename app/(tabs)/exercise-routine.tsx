import { View, Text, useColorScheme, StyleSheet } from 'react-native'
import React from 'react'
import { Colors, getColorGradient } from '@/constants/Colors'

const ExerciseRoutine = () => {
  const colorScheme = useColorScheme();

  return (
    <View style={[styles.containerView, { backgroundColor: getColorGradient(colorScheme, false)[0] }]}>
      <Text>ExerciseRoutine</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerView: {
    height: "100%"
  }
})
export default ExerciseRoutine