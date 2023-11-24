import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';
import SettingsScreen from './screens/SettingsScreen';
import GroupScreen from './screens/GroupScreen';

//Screen names
const homeName = "Home";
const chatName = "Chat";
const settingsName = "Settings";
const groupName = "Group";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === chatName) {
              iconName = focused ? 'chatbubble-ellipses-outline' : 'chatbubble-ellipses-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (rn === groupName) {
              iconName = focused ? 'color-filter-outline' : 'color-filter-outline';
            }
            

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'grey',
          tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
          // tabBarStyle: { padding: 10, height: 70}
          tabBarStyle : [
            {
              "display" : "flex"
            },null
          ]
        
          
        }}>
         
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={chatName} component={ChatScreen} />
        <Tab.Screen name={groupName} component={GroupScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;