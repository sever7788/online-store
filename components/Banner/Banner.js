import * as React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import quadroBannerImage from '../../assets/QuadroBanner.png';

const Banner = () => {
    return (
        <View style={styles.banner}>
            <View style={styles.bannerTextBlock}>
                <Text style={styles.appointmentText}>Need for Speed</Text>
                <Text style={styles.bannerProductName}>UdoDron 3 Pro</Text>
                <Text style={styles.productPrice}>1984 $</Text>
            </View>
            <Image source={quadroBannerImage} style={styles.quadroBanner} />
        </View>
    );
}

const styles = StyleSheet.create({
    productPrice: {
        position: 'absolute',
        width: 63,
        height: 24,
        left: 0,
        top: 49,
        /* 14 17 SemiBold */
        fontFamily: 'Lato-Bold',
        fontSize: 20,
        lineHeight: 24,
        display: 'flex',
        alignItems: 'center',
        color: '#FFFFFF',
        /* Inside Auto Layout */
        margin: 0,
    },
    bannerProductName: {
        position: 'absolute',
        width: 163,
        height: 32,
        left: 0,
        top: 17,
        /* 14 17 SemiBold */
        fontFamily: 'Lato-Black',

        fontSize: 24,
        lineHeight: 32,
        display: 'flex',
        alignItems: 'center',
        color: '#FFFFFF',
        /* Inside Auto Layout */
        margin: 0,
    },
    appointmentText: {
        position: 'absolute',
        width: 97,
        height: 17,
        left: 0,
        top: 0,
        /* 14 17 SemiBold */
        fontFamily: 'Lato-Bold',

        fontSize: 14,
        lineHeight: 17,
        /* identical to box height, or 121% */
        /* White */
        color: '#FFFFFF',
        /* Inside Auto Layout */
        margin: 0,
    },

    bannerTextBlock: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 0,

        position: 'absolute',
        width: 163,
        height: 73,
        left: 20,
        top: 71,
    },

    quadroBanner: {
        position: 'absolute',
        width: '68%',
        height: 164,
        right: 5,
        top: 0,
    },
    banner: {
        position: 'relative',
        width: '91%',
        height: 164,
        left: 'auto',
        top: '4%',
        /* Accent */
        backgroundColor: '#317AE8',
        /* 1 */
        shadowColor: "rgba(0, 0, 0, 0.15);",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 16,
        shadowRadius: 16,
        borderRadius: 20,
    },
});

export default Banner;