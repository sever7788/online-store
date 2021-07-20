import * as React from 'react';
import PagerView from 'react-native-pager-view';

import { TouchableOpacity, Image, StyleSheet, View, Text } from 'react-native';
import starImage from '../../assets/star.png';
import airImage from '../../assets/air.png';
import mavicImage from '../../assets/mavic.png';
import matriceImage from '../../assets/matrice.png';
class Carousel extends React.PureComponent {
    render() {
        return (
            <PagerView style={styles.carousel}  pageMargin={-150}
                initialPage={0}>
                <View style={styles.page} key="1">
                    <View style={styles.card}>
                        <Image source={airImage} style={styles.cardImage} />
                        <View style={styles.cardDescriptionBlock}>
                            <Text style={styles.cardProductName}>DJI Air 2S</Text>
                        </View>
                        <View style={styles.containerCardPrice}>
                            <Text style={styles.cardProductPrice}>1424 $</Text>
                            <View style={styles.ratingContainer}>
                                <Image source={starImage} style={styles.star} />
                                <Text style={styles.rating}>4.2</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.page} key="2">
                    <View style={styles.card}>
                        <Image source={mavicImage} style={styles.cardImage} />
                        <View style={styles.cardDescriptionBlock}>
                            <Text style={styles.cardProductName}>DJI Mavic Mini</Text>
                        </View>
                        <View style={styles.containerCardPrice}>
                            <Text style={styles.cardProductPrice}>990.90 $</Text>
                            <View style={styles.ratingContainer}>
                                <Image source={starImage} style={styles.star} />
                                <Text style={styles.rating}>4.5</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </PagerView>
        );
    }
}

const styles = StyleSheet.create({
    rating: {
        position: 'relative',
        fontFamily: 'Lato-Regular',
        fontSize: 14,
        lineHeight: 17,
        left: 4,
        color: '#1F1F1F',
    },
    ratingContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    star: {
        width: 14,
        height: 14,
    },
    cardDescriptionBlock: {
        left: 16,
        top: 11,
    },
    containerCardPrice: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '83%',
        top: '17%',
        left: 16,
    },
    cardProductPrice: {
        position: 'relative',
        fontFamily: 'Lato-Bold',
        fontSize: 16,
        lineHeight: 22,
        color: '#1F1F1F',
    },
    cardProductName: {
        position: 'absolute',
        fontFamily: 'Lato-Bold',
        fontSize: 14,
        lineHeight: 17,
        color: '#1F1F1F',
    },
    cardImage: {
        width: '100%',
        height: '68%',
    },
    card: {
        width: '54%',
        height: '100%',
        backgroundColor: '#FFF',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#E7E7E7',
        marginLeft: 16,
        
        borderRadius: 12,
    },
    page:{

    },
    carousel: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        position: 'relative',
        width: '100%',
        height: '31%',
        top: '3%',
    },
});

export default Carousel;