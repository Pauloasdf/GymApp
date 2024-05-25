import React from 'react';
import { View, useColorScheme, StyleSheet } from 'react-native';
import { Tabs } from "expo-router";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { getColorGradient } from '@/constants/Colors';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

const TabIcon = ({ color, name, size, focused, backgroundColor }) => {
  const animation = useSharedValue(1);

  if (focused) {
    animation.value = withTiming(2, { duration: 300 });
  } else {
    animation.value = withTiming(1, { duration: 300 });
  }

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: animation.value }, { translateY: focused ? -10 : 0 }],
    backgroundColor: withTiming(focused ? backgroundColor : 'transparent', { duration: 300 }),
    borderRadius: 25,
    padding: focused ? 5 : 0,
    borderBottomLeftRadius: focused ? 0 : 25,
    borderBottomRightRadius: focused ? 0 : 25,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  return (
    <Animated.View style={animatedStyle}>
      <MaterialIcons name={name} color={color} size={size} />
    </Animated.View>
  );
}

const TabsLayout = () => {
  const colorScheme = useColorScheme();
  const backgroundColor = getColorGradient(colorScheme, false)[1];
  const invertedBackgroundColor = getColorGradient(colorScheme, true)[0];
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: "10%",
          padding: 20,
          borderTopLeftRadius: 30,
          borderTopEndRadius: 30,
          backgroundColor: backgroundColor,
        },
        tabBarInactiveTintColor: invertedBackgroundColor,
        tabBarActiveTintColor: invertedBackgroundColor
      }}
    >
      <Tabs.Screen
        name="exercise-routine"
        options={{
          title: "Treinos",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              color={invertedBackgroundColor}
              name={'sports-gymnastics'}
              size={32}
              focused={focused}
              backgroundColor={backgroundColor} />
          )
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Rotina",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              color={invertedBackgroundColor}
              name={'calendar-month'}
              size={32}
              focused={focused}
              backgroundColor={backgroundColor} />
          )
        }}
      />
      <Tabs.Screen
        name="nutrition"
        options={{
          title: "Alimentação",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              color={invertedBackgroundColor}
              name={'fastfood'}
              size={32}
              focused={focused}
              backgroundColor={backgroundColor} />
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ focused }) => (
            <TabIcon
              color={invertedBackgroundColor}
              name={'person'}
              size={32}
              focused={focused}
              backgroundColor={backgroundColor} />
          )
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabsLayout;
