import { View, Platform, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = (headerBGColor: string, iconColor: string) => {
    return (
        <View style={{ backgroundColor: headerBGColor }}>
            {
                Platform.OS != "web" &&
                <View style={{ height: StatusBar.currentHeight || 24 }} ></View>
            }
            < View style={styles.header} >
                <Ionicons name="menu-outline" size={28} color={iconColor} />
                <View style={styles.headerRight}>
                    <Ionicons name="notifications-outline" size={28} color={iconColor} />
                    <Ionicons name="settings-outline" size={28} color={iconColor} />
                </View>
            </View >
        </View >
    )
}

const styles = StyleSheet.create({
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
})
export default Header