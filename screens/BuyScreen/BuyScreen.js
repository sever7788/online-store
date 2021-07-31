import * as React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';


const BuyScreen = (props) => {
    return (
        <SafeAreaView style={styles.container}>
                <Text style={styles.textPage}>BuyScreen</Text>
        </SafeAreaView>
    );

}


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom:'0%',
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

export default BuyScreen;