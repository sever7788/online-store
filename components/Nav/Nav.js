import * as React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, SafeAreaView, Image, StyleSheet, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import houseImage from '../../assets/images/house.png';
import loupeImage from '../../assets/images/loupe.png';
import cartImage from '../../assets/images/cart.png';
import heartImage from '../../assets/images/heart.png';
import MainContainer from '../../screens/MainScreen/MainScreen'
import ChosenScreen from '../../screens/ChosenScreen/ChosenScreen';
import FindScreen from '../../screens/FindScreen/FindScreen';
import BuyScreen from '../../screens/BuyScreen/BuyScreen';
import { setSelectedFilter, setSelectedProductID } from '../../redux/main-reducer';
import OrderContainer from '../../screens/ОrderScreen/OrderScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const getTabBarIcon = (source, focused) => {
    return (
        <Image source={source}
            resizeMode='contain'
            style={{
                width: 32,
                height: 32,
                tintColor: focused ? '#317AE8' : '#939399'
            }} />
    );
}

function HomeTabs() {
    return (
        <Tab.Navigator initialRouteName="MainScreen"
            tabBarOptions={{
                showLabel: false,
                style: { ...styles.nav }
            }}>
            <Tab.Screen name="MainScreen" component={MainContainer}
                options={{
                    tabBarIcon: ({ focused }) => getTabBarIcon(houseImage, focused),
                }} />
            <Tab.Screen name="ChosenScreen" component={ChosenScreen}
                options={{
                    tabBarIcon: ({ focused }) => getTabBarIcon(heartImage, focused),
                }} />
            <Tab.Screen name="FindScreen" component={FindScreen}
                options={{
                    tabBarIcon: ({ focused }) => getTabBarIcon(loupeImage, focused),
                }} />
            <Tab.Screen name="BuyScreen" component={BuyScreen} options={{
                tabBarIcon: ({ focused }) => getTabBarIcon(cartImage, focused),
            }} />
        </Tab.Navigator>
    );
}

const Nav = (props) => {
    return (
        <Stack.Navigator initialRouteName="MainScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="MainScreen" component={HomeTabs} />
            <Stack.Screen name="OrderScreen" component={OrderContainer} />
        </Stack.Navigator>
    );
}

let mapStateToProps = (state) => {
    return {
        products: state.mainReducer.products,
        productName: state.mainReducer.productName,
        selectedFilter: state.mainReducer.selectedFilter,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (filter) => {
            let action = setSelectedFilter(filter);
            dispatch(action);
        },
        setID: (id) => {
            let action = setSelectedProductID(id);
            dispatch(action);
        }
    }
}
const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

const styles = StyleSheet.create({
    navIcon: {
        position: 'relative',
        width: 32,
        height: 32,
    },
    nav: {
        position: 'relative',
        backgroundColor: '#FFFFFF',
        shadowColor: "rgba(0, 0, 0, 0.15);",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 16,
        shadowRadius: 16,
        elevation: 20,
        borderTopWidth: 0,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
});

export default NavContainer;