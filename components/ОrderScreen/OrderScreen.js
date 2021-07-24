import * as React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, SafeAreaView, Image, StyleSheet, View, Text, TextInput } from 'react-native';
import backImage from '../../assets/back.png';
import Form from '../Form/Form';
import Notification from '../Notification/Notification';

const findProduct = (products, id) => {
    let product;
    products.map(p => { return p.id == id ? product = p : null });
    return product;
}

const OrderScreen = (props) => {
    const [showResult, setResult] = React.useState(false)
    const clickButtonOrder = () => setResult(true);
    const clickButtonOk = () => setResult(false);
    let product = findProduct(props.products, props.productId);
    return (
        <SafeAreaView style={styles.container}>
            { showResult ? <Notification clickButtonOk={clickButtonOk}/> : null }
            <TouchableOpacity style={styles.header} onPress={() => { props.navigation.navigate('MainContainer'); }}>
                <Image source={backImage} style={styles.backButton} />
            </TouchableOpacity>
            <View style={styles.containerPhoto} >
                <Image source={product.photo} style={styles.photo} />
            </View>
            <View style={styles.containerDescription} >
                <Text style={styles.descriptionText}>Ordinary quadrocopter</Text>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.price}>{product.price} $</Text>
                <Text style={styles.detailedDescriptionText}>The Mavic 2 offers iconic Hasselblad image quality on Pro and a high-performance zoom lens on Zoom.</Text>
            </View>
            <Form clickButtonOrder={clickButtonOrder}/>
        </SafeAreaView>
    );
}


let mapStateToProps = (state) => {
    return {
        productId: state.mainReducer.selectedProductID,
        products: state.mainReducer.products,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}
const OrderContainer = connect(mapStateToProps, mapDispatchToProps)(OrderScreen);

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
        zIndex: 1,
        alignItems: "center",
        justifyContent:"center"
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
    detailedDescriptionText: {

        position: 'relative',
        fontFamily: 'Lato-Regular',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 22,
        alignSelf: "flex-start",
        color: "#939399",
        marginTop: 8,
    },
    price: {
        position: 'relative',
        fontFamily: 'Lato-Bold',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 20,
        lineHeight: 24,
        alignSelf: "flex-start",
        color: "#317AE8",
        marginTop: 8,
    },
    containerDescription: {
        width: "91%",
        position: 'relative',
        flex: 1,
        alignItems: "flex-start",

        left: "5%",
        alignSelf: "flex-start",
    },
    descriptionText: {

        fontFamily: "Lato-Regular",
        fontSize: 16,
        lineHeight: 22,
        color: "#1F1F1F",


    },

    photo: {
        position: "absolute",
        width: "91%",
        height: "91%",
        left: "5%"
    },
    containerPhoto: {
        width: "100%",
        height: 281
    },
    container: {
        position: 'relative',
        flex: 1,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
    },

    header: {
        position: 'relative',
        width: 100,
        height: 52,
        top: '6%',
alignSelf:"flex-start"
    },

    productName: {
        position: 'relative',
        /* 24 32 ExtraBold */
        fontFamily: 'Lato-Black',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 24,
        lineHeight: 32,
        alignSelf: "flex-start",
    },

    backButton: {
        position: 'absolute',
        width: 28,
        height: 28,
        left: 16,
    },
});

export default OrderContainer;