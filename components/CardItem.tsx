import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CardItem = ({ icon, name, time, details, showInteractionButtons, isExpanded, onPress }) => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheck = () => {
        setIsChecked(!isChecked);
    };

    return (
        <View style={[styles.exerciseItem, isExpanded && styles.exerciseItemExpanded]}>
            <View style={styles.exerciseSummary}>
                <MaterialIcons name={icon} size={32} color="#000" style={styles.icon} />
                <View style={styles.exerciseDetails}>
                    <Text style={styles.exerciseName}>{name}</Text>
                    <Text style={styles.exerciseTime}>{time}</Text>
                </View>
                {
                    showInteractionButtons &&
                    <>
                        <TouchableOpacity onPress={onPress} style={styles.expandButton}>
                            <Ionicons
                                name={isExpanded ? 'chevron-up-outline' : 'help'}
                                size={24}
                                color="#000"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleCheck} style={[styles.checkBox, isChecked && styles.checkBoxChecked]}>
                            {isChecked && <Ionicons name="checkmark" size={18} color="#fff" />}
                        </TouchableOpacity>
                    </>
                }
            </View>
            {isExpanded && <Text style={styles.exerciseDetailsText}>{details}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    exerciseItem: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 2,
        overflow: 'hidden',
    },
    exerciseItemExpanded: {
        minHeight: 300,
    },
    exerciseSummary: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
    exerciseDetails: {
        flex: 1,
    },
    exerciseName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
    },
    exerciseTime: {
        fontSize: 14,
        color: '#666666',
    },
    expandButton: {
        marginLeft: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 4,
        padding: 4,
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkBox: {
        marginLeft: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 4,
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkBoxChecked: {
        backgroundColor: 'green',
        borderColor: 'green',
    },
    exerciseDetailsText: {
        fontSize: 12,
        color: '#999999',
        marginTop: 10,
    }
});

export default CardItem;
