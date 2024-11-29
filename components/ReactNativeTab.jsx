import React, { useState } from 'react';
import {
    Animated,
    View,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    StatusBar,
    Text,
    useColorScheme
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ExerciseRoutinePage from '@/app/(tabs)/exercise-routine';
import { getColorGradient } from '@/constants/Colors';

const ReactNativeTab = (props) => {

    const colorScheme = useColorScheme();

    const [index, setIndex] = useState(0);
    const routes = props.routes;

    const ExerciseRoutine = () => (
        <View style={[styles(colorScheme).scene]}>
            <ExerciseRoutinePage />
        </View>
    );

    const Calendar = () => (
        <View style={[styles(colorScheme).scene]}>
            {/* Content for Calendar */}
        </View>
    );

    const Nutrition = () => (
        <View style={[styles(colorScheme).scene]}>
            {/* Content for Nutrition */}
        </View>
    );

    const Profile = () => (
        <View style={[styles(colorScheme).scene]}>
            {/* Content for Profile */}
        </View>
    );

    const renderTabBar = () => {
        return (
            <View style={styles(colorScheme).tabBar}>
                {routes.map((route, i) => {
                    const focused = index === i;
                    return (
                        <TouchableOpacity
                            key={route.key}
                            style={[styles(colorScheme).tabItem, focused && styles(colorScheme).tabItemFocused]}
                            onPress={() => setIndex(i)}
                        >
                            <MaterialIcons
                                name={route.icon}
                                size={32}
                                color={focused ? '#fff' : '#aaa'}
                            />
                            <Animated.Text
                                style={[
                                    styles(colorScheme).tabTitle,
                                    { color: focused ? '#fff' : '#aaa' },
                                ]}
                            >
                                {route.title}
                            </Animated.Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };

    const scenes = {
        "exercise-routine": <ExerciseRoutine />,
        calendar: <Calendar />,
        nutrition: <Nutrition />,
        profile: <Profile />,
    };

    const renderHeader = () => (
        <View style={styles(colorScheme).header}>
            <Text style={styles(colorScheme).headerTitle}>Meu Aplicativo</Text>
        </View>
    );

    return (
        <View style={styles(colorScheme).container}>
            {renderHeader()}
            <View style={styles(colorScheme).mainContent}>
                {renderTabBar()}
                <View style={styles(colorScheme).content}>{scenes[routes[index].key]}</View>
            </View>
        </View>
    );
};

const styles = (colorScheme, focused = false) => {
    const bgColor = getColorGradient(colorScheme, false)[1];
    const invertedBgColor = getColorGradient(colorScheme, false)[0];
    return StyleSheet.create({
        container: {
            flex: 1,
        },
        header: {
            width: '100%',
            height: 60,
            backgroundColor: bgColor,
            justifyContent: 'center',
            alignItems: 'center',
        },
        headerTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#fff',
        },
        mainContent: {
            flex: 1,
            flexDirection: 'row', 
        },
        tabBar: {
            width: '20%', 
            maxWidth: 200,
            backgroundColor: bgColor,
            flexDirection: 'column',
            paddingTop: StatusBar.currentHeight,
            justifyContent: 'flex-start',
        },
        content: {
            flex: 1,
            backgroundColor:invertedBgColor
        },
        tabItem: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 20,
        },
        tabItemFocused: {
            backgroundColor: invertedBgColor,
        },
        tabTitle: {
            marginTop: 8,
            fontSize: 14,
            textAlign: 'center',
        },
        scene: {
            flex: 1,
        },
    })
};

export default ReactNativeTab;
