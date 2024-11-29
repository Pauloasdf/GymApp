import React from 'react';
import { View, useColorScheme, StyleSheet } from 'react-native';
import { Tabs } from "expo-router";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { getColorGradient } from '@/constants/Colors';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { Fonts } from '@/constants/Fonts';

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

const TabsLayout = (props) => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarLabelPosition: 'below-icon',
                tabBarStyle: (props.isWeb && props.isWideScreen)
                    ? styles(props.backgroundColor).webTabBar
                    : styles(props.backgroundColor).mobileTabBar,
                tabBarInactiveTintColor: props.invertedBackgroundColor,
                tabBarActiveTintColor: props.invertedBackgroundColor,
                tabBarPosition: (props.isWeb && props.isWideScreen) ? 'left' : 'bottom',
            }}
        >
            {props.routes.map((route, index) =>
                <Tabs.Screen
                    key={index}
                    name={route.key}
                    options={{
                        title: route.title,
                        tabBarIcon: ({ focused }) => (
                            <TabIcon
                                color={props.invertedBackgroundColor}
                                name={route.icon}
                                size={32}
                                focused={focused}
                                backgroundColor={props.backgroundColor} />
                        ),
                        tabBarLabelStyle: ({ focused }) => (
                            styles(focused).tabBarLabelStyle
                        ),
                    }}
                    style={{ width: 200 }}
                />
            )}
        </Tabs>
    );
}

const styles = (bgColor, focused = false) => StyleSheet.create({
    mobileTabBar: {
        height: "10%",
        padding: 20,
        marginTop: -200,
        borderTopLeftRadius: 30,
        borderTopEndRadius: 30,
        backgroundColor: bgColor,
    },
    webTabBar: {
        width: "10vw",
        minWidth: 200,
        maxWidth: 300,
        height: "100%",
        backgroundColor: bgColor,
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'absolute'
    },
    tabBarLabelStyle: {
        fontSize: focused
            ? Fonts.TabBarActive.fontSize
            : Fonts.TabBar.fontSize,
        marginVertical: 15,
    },
});

export default TabsLayout;
