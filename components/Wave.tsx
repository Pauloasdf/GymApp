// File: Wave.tsx

import React, { useEffect } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Animated, { Easing, useAnimatedProps, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const AnimatedPath = Animated.createAnimatedComponent(Path);

const Wave: React.FC = ({ position, color }) => {
    const animatedValue = useSharedValue(0);

    useEffect(() => {
        animatedValue.value = withRepeat(
            withTiming(2 * Math.PI, { duration: 10000, easing: Easing.linear }),
            -1,
            false
        );
    }, [animatedValue]);

    const animatedProps = useAnimatedProps(() => {

        const wavePath = function (t: number) {
            const amplitude = 50; // Adjusted amplitude to double the wave's height
            const frequency = 1;
            const path = [];
            for (let x = 0; x <= width * 2; x++) {
                const y = amplitude * Math.sin((x / 2 * frequency * 0.02) + t);
                path.push(`L ${x} ${50 + y}`);
            }
            return `M 0 100 ${path.join(' ')} V 350 H 0 Z`;
        };

        const path = wavePath(animatedValue.value);
        return { d: path };
    });

    return (
        <View style={position == "top" ? styles.containerTop : styles.containerBottom}>
            <Svg width={width * 2} height={350}>
                <AnimatedPath animatedProps={animatedProps} fill={color} />
            </Svg>
        </View >

    );
};

const styles = StyleSheet.create({
    containerBottom: {
        bottom: -220,
        right: -250,
        transform: "rotate(-30deg)",
        position: "absolute"
    },
    containerTop: {
        top: -220,
        left: -250,
        transform: "rotate(-210deg)",
        position: "absolute"
    },
});

export default Wave;
