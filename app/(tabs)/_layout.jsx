import React from 'react';
import { View, useColorScheme, StyleSheet, Platform, StatusBar } from 'react-native';
import { Tabs } from "expo-router";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { getColorGradient } from '@/constants/Colors';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import Ionicons from '@expo/vector-icons/Ionicons';

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
    borderRadius: 50, // Increased border radius for smoother curve
    padding: focused ? 10 : 0,
    marginBottom: focused ? -20 : 0,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  return (
    <Animated.View style={[animatedStyle, focused && styles.focusedIcon]}>
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
        header: () => (
          <View style={{ backgroundColor: backgroundColor }}>
            {Platform.OS !== "web" && <View style={{ height: StatusBar.currentHeight || 24 }} />}
            <View style={styles.header}>
              <Ionicons name="menu-outline" size={28} color={invertedBackgroundColor} />
              <View style={styles.headerRight}>
                <Ionicons name="notifications-outline" size={28} color={invertedBackgroundColor} />
                <Ionicons name="settings-outline" size={28} color={invertedBackgroundColor} />
              </View>
            </View>
          </View>
        ),
        tabBarStyle: {
          height: "10%",
          padding: 20,
          paddingBottom: "7%",
          marginTop: -30,
          backgroundColor: backgroundColor,
        },
        tabBarShowLabel: false,
        tabBarInactiveTintColor: invertedBackgroundColor,
        tabBarActiveTintColor: invertedBackgroundColor,
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
              backgroundColor={backgroundColor}
            />
          ),
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
              backgroundColor={backgroundColor}
            />
          ),
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
              backgroundColor={backgroundColor}
            />
          ),
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
              backgroundColor={backgroundColor}
            />
          ),
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
  focusedIcon: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    marginHorizontal: -10,
    padding: 5,
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
});

export default TabsLayout;
