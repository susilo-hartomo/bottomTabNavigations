import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Notifications = () => {
    return (
        <View style={styles.container}>
            <Text>Notifications</Text>
        </View>
    )
}

export default Notifications

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#91d18b',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
