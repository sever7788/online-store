import * as React from 'react';
import { TouchableOpacity, SafeAreaView, Image, StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import menuImage from '../../assets/menu.png';
import quadroBannerImage from '../../assets/QuadroBanner.png';
import houseImage from '../../assets/house.png';
import loupeImage from '../../assets/loupe.png';
import cartImage from '../../assets/cart.png';
import heartImage from '../../assets/heart.png';
import starImage from '../../assets/star.png';
import airImage from '../../assets/air.png';
import mavicImage from '../../assets/mavic.png';
import matriceImage from '../../assets/matrice.png';
import Carousel from '../Carousel/Carousel.js';
const HomeScreen = () => {

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
                <View style={styles.banner}>
                    <View style={styles.bannerTextBlock}>
                        <Text style={styles.appointmentText}>Need for Speed</Text>
                        <Text style={styles.bannerProductName}>UdoDron 3 Pro</Text>
                        <Text style={styles.productPrice}>1984 $</Text>
                    </View>
                    <Image source={quadroBannerImage} style={styles.quadroBanner} />
                </View>
                <View style={styles.blockButtons}>
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterButtonText}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterButton}
                    ><Text style={styles.filterButtonText}>Ceap</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterButtonText}>Best</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterButton}>
                        <Text style={styles.filterButtonText}>Fast</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.buttonDescriptionText}>All Quadrocopters</Text>

                <Carousel/>

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
        elevation: 5,
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
    filterButtonText: {
        position: 'absolute',
        width: 46,
        height: 22,
        left: 16,
        top: 12,

        /* baseline 16 22 */

        fontFamily: 'Lato-Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 22,
        /* identical to box height, or 137% */

        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
    },
    filterButton: {
        /* Auto Layout */
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'flex-start',

        paddingTop: 16,
        width: 78,
        height: 46,
        left: 0,
        top: 0,
        /* LightGray */
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#E7E7E7',
        borderRadius: 12,
        flexGrow: 0,
        marginLeft: 0,
    },
    blockButtons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: 0,
        position: 'relative',
        width: '91%',
        height: 46,
        top: '8%',

    },
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

    }
});

export default HomeScreen;