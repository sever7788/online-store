import * as React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, SafeAreaView, Image, StyleSheet, View, Text } from 'react-native';
import houseImage from '../../assets/house.png';
import loupeImage from '../../assets/loupe.png';
import cartImage from '../../assets/cart.png';
import heartImage from '../../assets/heart.png';

import { setSelectedFilter, setSelectedProductID } from '../../redux/main-reducer';
const Nav = (props) => {
    return (
        <View style={styles.nav}>
            <TouchableOpacity onPress={() => { props.navigation.navigate('MainContainer'); }}>
                <Image source={houseImage} style={styles.navIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { props.navigation.navigate('ChosenScreen'); }}>
                <Image source={heartImage} style={styles.navIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { props.navigation.navigate('FindScreen'); }}>
                <Image source={loupeImage} style={styles.navIcon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { props.navigation.navigate('BuyScreen'); }}>
                <Image source={cartImage} style={styles.navIcon} />
            </TouchableOpacity>
        </View>
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: '7%',
        left: 0,
        bottom:0,
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
});

export default NavContainer;