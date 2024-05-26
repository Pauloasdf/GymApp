import React from 'react';
import { View, useColorScheme, StyleSheet, Platform, Text, StatusBar } from 'react-native';
import { Tabs } from "expo-router";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { getColorGradient } from '@/constants/Colors';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { Fonts } from '@/constants/Fonts';
import Ionicons from '@expo/vector-icons/Ionicons';
import Header from '@/components/Header';
const TabIcon = ({ color, name, size, focused, backgroundColor }) => {
  const animation = useSharedValue(1);

  // if (focused) {
  //   animation.value = withTiming(2, { duration: 300 });
  // } else {
  //   animation.value = withTiming(1, { duration: 300 });
  // }

  // const animatedStyle = useAnimatedStyle(() => ({
  //   transform: [{ scale: animation.value }, { translateY: focused ? -10 : 0 }],
  //   backgroundColor: withTiming(focused ? backgroundColor : 'transparent', { duration: 300 }),
  //   borderRadius: 25,
  //   padding: focused ? 5 : 0,
  //   borderBottomLeftRadius: focused ? 0 : 25,
  //   borderBottomRightRadius: focused ? 0 : 25,
  //   overflow: 'hidden',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // }));

  return (
    // <Animated.View style={animatedStyle}>
      <MaterialIcons name={name} color={color} size={size} />
    // </Animated.View>
  );
}

const TabsLayout = () => {
  const colorScheme = useColorScheme();
  const backgroundColor = getColorGradient(colorScheme, false)[1];
  const invertedBackgroundColor = getColorGradient(colorScheme, true)[0];
  return (
    <Tabs
      screenOptions={{
        header: () => {
          return (
            <View style={{ backgroundColor: backgroundColor }}>
              {
                Platform.OS != "web" &&
                <View style={{ height: StatusBar.currentHeight || 24 }} ></View>
              }
              < View style={styles.header} >
                <Ionicons name="menu-outline" size={28} color={invertedBackgroundColor} />
                <View style={styles.headerRight}>
                  <Ionicons name="notifications-outline" size={28} color={invertedBackgroundColor} />
                  <Ionicons name="settings-outline" size={28} color={invertedBackgroundColor} />
                </View>
              </View >
            </View >
          );
        },
        tabBarStyle: {
          height: "10%",
          padding: 20,
          marginTop: -30,
          // borderTopLeftRadius: 30,
          // borderTopEndRadius: 30,
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
          ),
          tabBarLabelStyle: ({ focused }) => (
            { fontSize: focused ? Fonts.TabBarActive.fontSize : Fonts.TabBar.fontSize }
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
          ),
          tabBarLabelStyle: ({ focused }) => (
            { fontSize: focused ? Fonts.TabBarActive.fontSize : Fonts.TabBar.fontSize }
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
    </Tabs >
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerRight: {
    flexDirection: 'row',
    width: 80,
    justifyContent: 'space-between',
  },
  headerContents: {
    flexDirection: "column",
    justifyContent: 'space-between'
  }
});

export default TabsLayout;
