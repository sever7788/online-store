// In App.js in a new project
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import Nav from './components/Nav/Nav'
import store from './redux/redux-store'
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
//const Stack = createStackNavigator();



function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{
        position: 'relative',
        flex: 1,
        backgroundColor: '#F8F8F8',
      }}>
        <NavigationContainer>
          <Nav />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

export default App;