import 'react-native-gesture-handler';

import * as React from 'react';
import { View, Text, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { HomePage } from './pages/home.page';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListPage } from './pages/list.page';
import { ItemInfoPage } from './pages/itemInfo.page';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} options={{headerShown: false}}/>
        <Stack.Screen name="ListPage" component={ListPage} options={{title: 'Lista generica'}}/>
        <Stack.Screen name="ItemInfoPage" component={ItemInfoPage} options={{title: 'Informacion de item'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

