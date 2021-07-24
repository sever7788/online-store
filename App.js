// In App.js in a new project
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainContainer from './components/MainScreen/MainScreen';
import OrderContainer from './components/ОrderScreen/OrderScreen';
import ChosenScreen from './components/ChosenScreen/ChosenScreen';
import FindScreen from './components/FindScreen/FindScreen';
import BuyScreen from './components/BuyScreen/BuyScreen';
import store from './redux/redux-store'
import { Provider } from 'react-redux';

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainContainer" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainContainer" component={MainContainer} />
          <Stack.Screen name="Order" component={OrderContainer} />
          <Stack.Screen name="ChosenScreen" component={ChosenScreen} />
          <Stack.Screen name="FindScreen" component={FindScreen} />
          <Stack.Screen name="BuyScreen" component={BuyScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;