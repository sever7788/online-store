import * as React from 'react';
import { TouchableOpacity, Image, StyleSheet, View, Text } from 'react-native';
import starImage from '../../../assets/star.png';

const Card = (props) => {

    return (
                    <View style={styles.card}>
                        <Image source={props.photo} style={styles.cardImage} />
                        <View style={styles.cardDescriptionBlock}>
                            <Text style={styles.cardProductName}>{props.name}</Text>
                        </View>
                        <View style={styles.containerCardPrice}>
                            <Text style={styles.cardProductPrice}>{props.price}</Text>
                            <View style={styles.ratingContainer}>
                                <Image source={starImage} style={styles.star} />
                                <Text style={styles.rating}>{props.rating}</Text>
                            </View>
                        </View>
                    </View>
    );
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
    page: {
        
    },
});

export default Card;