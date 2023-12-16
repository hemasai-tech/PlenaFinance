import * as React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store'; // Import your store

import Home from './components/Home';
import Categories from './components/Categories';
import Favorites from './components/Favorites';
import More from './components/More';
import CartItem from './components/generic/CartItem';
import ItemCard from './components/generic/ItemCard';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

export default function App() {
  const RoundedTabBarIcon = ({source, focused}) => (
    <View
      style={[
        styles.tabIconContainer,
        {
          backgroundColor: focused ? '#000' : 'transparent',
          marginBottom: focused ? 20 : 0,
        },
      ]}>
      <Image
        style={[
          styles.bottomTabIcon,
          {tintColor: focused ? '#E0B420' : '#000'},
        ]}
        source={source}
      />
    </View>
  );

  const HomeStackScreen = () => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <HomeStack.Screen
          options={{headerShown: false, tabBarVisible: false}}
          name="ItemCard"
          component={ItemCard}
        />
        <HomeStack.Screen
          options={{headerShown: false, tabBarVisible: false}}
          name="CartItem"
          component={CartItem}
        />
      </HomeStack.Navigator>
    );
  };

  return (
    <NavigationContainer screenOptions={{headerShown: false}}>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeStackScreen"
          component={HomeStackScreen}
          options={({route}) => ({
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <RoundedTabBarIcon
                source={require('./assets/home.png')}
                focused={focused}
              />
            ),
            tabBarLabel:
              route.name === 'HomeStackScreen' ? '' : 'HomeStackScreen', // Hide label when not on the active tab
          })}
        />
        <Tab.Screen
          name="Categories"
          component={Categories}
          options={({route}) => ({
            tabBarIcon: ({focused}) => (
              <RoundedTabBarIcon
                source={require('./assets/Category.png')}
                focused={focused}
              />
            ),
            tabBarLabel: route.name === 'Categories' ? '' : 'Categories', // Hide label when not on the active tab
          })}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={({route}) => ({
            tabBarIcon: ({focused}) => (
              <RoundedTabBarIcon
                source={require('./assets/Heart.png')}
                focused={focused}
              />
            ),
            tabBarLabel: route.name === 'Favorites' ? '' : 'Favorites', // Hide label when not on the active tab
          })}
        />
        <Tab.Screen
          name="More"
          component={More}
          options={({route}) => ({
            tabBarIcon: ({focused}) => (
              <RoundedTabBarIcon
                source={require('./assets/more_vertical.png')}
                focused={focused}
              />
            ),
            tabBarLabel: route.name === 'More' ? '' : 'More', // Hide label when not on the active tab
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bottomTabIcon: {
    width: 24,
    height: 24,
  },
  tabIconContainer: {
    borderRadius: 20, // Adjust the border radius as needed
    padding: 10,
    borderColor: '#fff', // Border color for embossed effect
  },
  tabIcon: {
    width: 30, // Adjust the width as needed
    height: 30, // Adjust the height as needed
  },
});
