import * as React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, SafeAreaView, Image, StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import menuImage from './../../assets/images/menu.png';

import Carousel from './components/Carousel/Carousel.js';
import Banner from './components/Banner/Banner';
import Crisps from './components/Сrisps/Сrisps';
import { setSelectedFilter, setSelectedProductID } from '../../redux/main-reducer';

const MainScreen = (props) => {

    let [fontsLoaded] = useFonts({
        'Lato-Black': require('../../assets/fonts/Lato-Black.ttf'),
        'Lato-Regular': require('../../assets/fonts/Lato-Regular.ttf'),
        'Lato-Bold': require('../../assets/fonts/Lato-Bold.ttf'),
    });

    const [page, setPage] = React.useState(0);
    const [lastPositions, setLastPositions] = React.useState([0, 0, 0, 0]);
    let lastPosition = 0;
    switch (props.selectedFilter) {
        case "All": lastPosition = lastPositions[0]; break;
        case "Cheap": lastPosition = lastPositions[1]; break;
        case "Best": lastPosition = lastPositions[2]; break;
        case "Fast": lastPosition = lastPositions[3]; break;
    }

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
                    setFilter={props.setFilter} 
                    setLastPositions={setLastPositions}
                    page={page}
                    lastPositions={lastPositions}/>
                <Text style={styles.buttonDescriptionText}>All Quadrocopters</Text>

                <Carousel setID={props.setID}
                    setPage={setPage}
                    lastPosition={lastPosition}
                    products={props.products}
                    productName={props.productName}
                    navigation={props.navigation}
                    selectedFilter={props.selectedFilter} />
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
        },
        setID: (id) => {
            let action = setSelectedProductID(id);
            dispatch(action);
        }
    }
}
const MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainScreen);

const styles = StyleSheet.create({

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
        justifyContent: 'space-between',
        paddingBottom: 20,
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