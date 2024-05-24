import { View, Text } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Icon from 'react-native-vector-icons/AntDesign';

const TabIcon = ({ name, color, size, focused }) => {
  return (
    <View>
      <MaterialIcons name={name} color={color} size={size} focused={focused} />
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false
        }}
      >
        <Tabs.Screen
          name="exercise-routine"
          options={{
            title: "Treinos",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name={'sports-gymnastics'} color={color} size={32} focused={focused} />
            )
          }}
        />
        <Tabs.Screen
          name="calendar"
          options={{
            title: "Rotina",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name={'calendar-month'} color={color} size={32} focused={focused} />
            )
          }}
        />
        <Tabs.Screen
          name="nutrition"
          options={{
            title: "Alimentação",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name={'fastfood'} color={color} size={32} focused={focused} />
            )
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Perfil",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon name={'person'} color={color} size={32} focused={focused} />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout