import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, StyleSheet } from 'react-native';

// Screens
import HomeScreen from './src/screens/HomeScreen'
import Notifications from './src/screens/Notifications'
import ProfileScreen from './src/screens/ProfileScreen'

// Bottom navigations
const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#ffff"
      labeled={false}
      style={{ backgroundColor: "#ffff" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignContent: 'center' }}>
              {focused ? (
                <View style={{ width: 120, height: 80 }}>
                  <View style={styles.bgActive}>
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                    <Text style={{ marginStart: 8, color: '#ffff' }}>Home</Text>
                  </View>
                </View>
              ) : (
                  <View style={{ width: 120, height: 40, alignSelf: 'center' }}>
                    <View style={styles.bgNotActive}>
                      <MaterialCommunityIcons name="home" color={color} size={26} />
                    </View>
                  </View>
                )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignContent: 'center' }}>
              {focused ? (
                <View style={{ width: 160, height: 80 }}>
                  <View style={styles.bgActive}>
                    <MaterialCommunityIcons name="bell" color={color} size={26} />
                    <Text style={{ marginStart: 8, color: '#ffff' }}>Notifications</Text>
                  </View>
                </View>
              ) : (
                  <View style={{ width: 120, height: 40, alignSelf: 'center' }}>
                    <View style={styles.bgNotActive}>
                      <MaterialCommunityIcons name="bell" color={color} size={26} />
                    </View>
                  </View>
                )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignContent: 'center' }}>
              {focused ? (
                <View style={{ width: 120, height: 80 }}>
                  <View style={styles.bgActive}>
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                    <Text style={{ marginStart: 8, color: '#ffff' }}>Profile</Text>
                  </View>
                </View>
              ) : (
                  <View style={{ width: 120, height: 40, alignSelf: 'center' }}>
                    <View style={styles.bgNotActive}>
                      <MaterialCommunityIcons name="account" color={color} size={26} />
                    </View>
                  </View>
                )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bgActive: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#394989',
    borderRadius: 100
  },
  bgNotActive: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 100
  }
})
