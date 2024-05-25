// File: ArrowButton.tsx

import React, { useRef } from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated, View } from 'react-native';

const ArrowButton: React.FC<{ onPress: () => void, buttonPosition: string, buttonColor: string }> = ({ onPress, buttonPosition, buttonColor }) => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.8,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{ position: buttonPosition, height: "100%", width: "100%" }}>
      <TouchableOpacity
        style={styles.touchableOpacity}
        activeOpacity={1}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onPress}
      >
        <Animated.View style={[styles.button,
        { transform: [{ scale: scaleValue }] }
        ]}>
          <Text style={styles.arrow}>→</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  touchableOpacity: {
    top: "45%",
    left: "84%"
  },
  button: {
    width: 50,  // Botão quadrado
    height: 100, // Botão quadrado
    borderColor: '#264653', // Cor da borda mais escura
    borderWidth: 2, // Largura da borda
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5, // Bordas ligeiramente arredondadas
    backgroundColor: '#2A9D8F', // Cor de fundo azul claro
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,  // Adiciona efeito de sombra para Android
  },
  arrow: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default ArrowButton;
