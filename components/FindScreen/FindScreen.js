import * as React from 'react';
import {SafeAreaView, StyleSheet, Text } from 'react-native';
import Nav from './../Nav/Nav';

const FindScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.textPage}> FindScreen</Text>
            <Nav navigation={props.navigation}/>
        </SafeAreaView>
    );

}


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    textPage: {
        position: 'relative',
        /* 24 32 ExtraBold */
        fontFamily: 'Lato-Black',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 24,
        lineHeight: 32,
        top:'50%',
        /* identical to box height, or 133% */
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
    },


});

export default  FindScreen;