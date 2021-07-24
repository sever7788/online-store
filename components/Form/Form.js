import * as React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, SafeAreaView, Image, StyleSheet, View, Text, TextInput, Button } from 'react-native';




const Form = (props) => {
    const sample = '+375(_ _)_ _ _-_ _-_ _';
    const [name, setName] = React.useState('');
    const [phone_number, setPhoneNumber] = React.useState(sample);
    const changeNumber = (text) => {
        let text2 = text.split('');
        let sample2 = sample.split('');
        console.log(text2);
        text2.map((p, i) => {
            if (p >= '0' && p <= '9' && i > 4) {
                sample2[sample2.findIndex((p) => {
                    return p == '_';
                })] = p;
            }
        });
        // const num = text2.reverse().find((p)=>{
        //     return (p >= '0' && p <= '9');
        // });
        // sample2[sample2.findIndex((p)=>{return p=='_';})] = num;
        sample2.map((p, i) => { if (p != '_' && sample2[i + 1] == ' ') { sample2.splice(i + 1, 1); } });
        text = sample2.join('');
        setPhoneNumber(text);
    }
    return (
        <View style={styles.form}>
            <TextInput style={[styles.input, { marginBottom: 24 }]}
                placeholder='Имя' onChangeText={setName} />
            <TextInput style={styles.input} onChangeText={changeNumber}
                value={phone_number} />
            <TouchableOpacity style={styles.button} title="Заказать"
                onPress={props.clickButtonOrder}>
                <Text style={styles.buttonTitle}>
                    Заказать
                </Text>
            </TouchableOpacity>
        </View>
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
        height: 46,
        borderRadius: 8,
        backgroundColor: '#317AE8'
    },
    form: {
        position: 'relative',
        width: '91%',
        backgroundColor: "#F8F8F8",
    },
    input: {
        position: 'relative',
        borderColor: '#E7E7E7',
        borderBottomWidth: 1,
        paddingBottom: 8,
        width: '100%',

        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 22,
        alignSelf: "flex-start",
        color: '#000',

    },
    name: {
        position: 'relative',
        /* 24 32 ExtraBold */
        fontFamily: 'Lato-Regular',
        fontStyle: 'normal',

        fontSize: 16,
        lineHeight: 22,
        alignSelf: "flex-start",
        color: '#000',
    },
});

export default Form;