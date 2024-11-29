import { React, useState, useEffect } from 'react';
import { View, useColorScheme, StyleSheet, Platform, Dimensions } from 'react-native';
import { Tabs } from "expo-router";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { getColorGradient } from '@/constants/Colors';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { Fonts } from '@/constants/Fonts';
import ReactNativeTab from "../../components/ReactNativeTab"
import ExpoRouterTab from "../../components/ExpoRouterTab"

const routes = [
  { key: 'exercise-routine', title: 'Treinos', icon: 'sports-gymnastics' },
  { key: 'calendar', title: 'Rotina', icon: 'calendar-month' },
  { key: 'nutrition', title: 'Alimentação', icon: 'fastfood' },
  { key: 'profile', title: 'Perfil', icon: 'person' },
];


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
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
  const backgroundColor = getColorGradient(colorScheme, false)[1];
  const invertedBackgroundColor = getColorGradient(colorScheme, true)[0];
  const isWeb = Platform.OS === 'web';

  useEffect(() => {
    const handleResize = ({ window }) => {
      setScreenWidth(window.width);
    };
    const subscription = Dimensions.addEventListener('change', handleResize);
    return () => {
      subscription.remove();
    };
  }, []);

  const isWideScreen = screenWidth > 768;

  return (
    <>
      {(isWeb && isWideScreen)
        ?
        <ReactNativeTab
          routes={routes}
          isWeb={isWeb}
          isWideScreen={isWideScreen}
          backgroundColor={backgroundColor}
          invertedBackgroundColor={invertedBackgroundColor}
        />
        :
        <ExpoRouterTab
          routes={routes}
          isWeb={isWeb}
          isWideScreen={isWideScreen}
          backgroundColor={backgroundColor}
          invertedBackgroundColor={invertedBackgroundColor}
        />
      }
    </>
  );
}

export default TabsLayout;


