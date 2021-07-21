import * as React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, SafeAreaView, Image, StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import menuImage from '../../assets/menu.png';
import houseImage from '../../assets/house.png';
import loupeImage from '../../assets/loupe.png';
import cartImage from '../../assets/cart.png';
import heartImage from '../../assets/heart.png';
import Carousel from '../Carousel/Carousel.js';
import Banner from '../Banner/Banner';
import Crisps from '../Сrisps/Сrisps';
import { setSelectedFilter } from '../../redux/main-reducer';
const MainScreen = (props) => {

    let [fontsLoaded] = useFonts({
        'Lato-Black': require('../../assets/fonts/Lato-Black.ttf'),
        'Lato-Regular': require('../../assets/fonts/Lato-Regular.ttf'),
        'Lato-Bold': require('../../assets/fonts/Lato-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <SafeAreaView style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.productName}>Quadrojoy</Text>
                    <Image source={menuImage} style={styles.menuButton} />
                </View>
                <Banner />
                <Crisps selectedFilter={props.selectedFilter} 
                setFilter={props.setFilter} />
                <Text style={styles.buttonDescriptionText}>All Quadrocopters</Text>

                <Carousel products={props.products}
                    productName={props.productName} 
                    selectedFilter={props.selectedFilter} />

                <View style={styles.nav}>
                    <Image source={houseImage} style={styles.navIcon} />
                    <Image source={heartImage} style={styles.navIcon} />
                    <Image source={loupeImage} style={styles.navIcon} />
                    <Image source={cartImage} style={styles.navIcon} />
                </View>
            </SafeAreaView>
        );
    }
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
        }
    }
}
const MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainScreen);

const styles = StyleSheet.create({
    navIcon: {
        position: 'relative',
        width: 32,
        height: 32,
    },
    nav: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: '7%',
        left: 0,

        backgroundColor: '#FFFFFF',
        shadowColor: "rgba(0, 0, 0, 0.15);",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 16,
        shadowRadius: 16,
        elevation: 20,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },

    buttonDescriptionText: {
        position: 'relative',
        height: 24,
        left: 16,
        top: '4%',
        /* 20 24 Bold */
        fontFamily: 'Lato-Bold',
        fontStyle: 'normal',
        alignSelf: 'flex-start',
        fontSize: 20,
        lineHeight: 24,
        /* identical to box height, or 120% */
        /* BlackMain */
        color: '#1F1F1F',
    },
    container: {
        position: 'relative',
        flex: 1,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    header: {
        position: 'relative',
        width: 375,
        height: 52,
        top: '6%',

    },

    productName: {
        position: 'absolute',
        width: 116,
        height: 32,
        left: 19,

        /* 24 32 ExtraBold */
        fontFamily: 'Lato-Black',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 24,
        lineHeight: 32,
        /* identical to box height, or 133% */
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center'
    },

    menuButton: {
        position: 'absolute',
        width: 28,
        height: 28,
        left: 323,

    },
});

export default MainContainer;