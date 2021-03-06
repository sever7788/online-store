import * as React from 'react';
import { TouchableOpacity, SafeAreaView, Image, StyleSheet, View, Text, TextInput } from 'react-native';
import carImage from './../../../../assets/images/car.png'
import Modal from 'react-native-modal';

const Notification = (props) => {
    return (
        <Modal isVisible={props.isModalVisible} backdropTransitionOutTiming = {0}>
            <View style={styles.notification} >
                <Image source={carImage} style={styles.car} />
                <View>
                    <Text style={styles.notText}>
                        Ваш заказ принят
                    </Text>
                </View>
                <TouchableOpacity style={styles.button} title="Заказать" onPress = { props.toggleModal }>
                    <Text style={styles.buttonTitle}>
                        Ок
                    </Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    buttonTitle: {
        position: 'relative',
        /* 24 32 ExtraBold */
        fontFamily: 'Lato-Regular',
        fontStyle: 'normal',

        fontSize: 16,
        lineHeight: 22,
        color: '#FFF',
    },
    button: {
        marginTop: '7%',
        alignItems: 'center',
        justifyContent: 'center',
        width: '39%',
        height: 46,
        borderRadius: 8,
        backgroundColor: '#317AE8'
    },
    car: {

        width: 92,
        height: '37%',
    },
    notification: {
        width: '91%',
        height: '31%',
        position: 'absolute',
        top: '30%',
        backgroundColor: '#FFF',
        borderRadius: 16,
        zIndex: 2,
        alignItems: "center",
        justifyContent: "center",
        alignSelf:"center"
    },
    notText: {
        position: 'relative',
        /* 24 32 ExtraBold */
        fontFamily: 'Lato-Regular',
        fontStyle: 'normal',

        fontSize: 16,
        lineHeight: 22,
        alignSelf: "flex-start",
        color: '#939399',
    },

});

export default Notification;