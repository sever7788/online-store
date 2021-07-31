import * as React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, SafeAreaView, Image, StyleSheet, View, Text, TextInput, Button } from 'react-native';



const Form = (props) => {
    const sample = '+375(__)___-__-__';
    const [pos = { start, end }, setPos] = React.useState({ start: 5, end: 5 });
    const [name, setName] = React.useState('');
    const [phone_number, setPhoneNumber] = React.useState(sample);
    const [disabled, setDisabled] = React.useState(true);

    const changeName = (text) => {
        setName(text);
        if (pos.start == sample.length && name.indexOf(" ") == -1 && name)
            setDisabled(false);
    }

    const changeNumber = (text) => {
        let text2 = text.split('');
        let sample2 = sample.split('');
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
    const handlerForPressedKeys = (key) => {
        let pos2 = { start: pos.start, end: pos.end }
        if (key == "Backspace") {
            pos.start != 5 ? pos2 = pos2 = { start: pos.start - 1, end: pos.end - 1 } : null;
            setPos(pos2)
            if (pos.start != sample.length)
                setDisabled(true);
            return;
        }
        if (key >= '0' && key <= '9') {
            if (pos.start != sample.length)
                pos2 = { start: pos.start + 1, end: pos.end + 1 }
            if (pos.start == 7 || pos.start == 11 || pos.start == 14)
                pos2 = { start: pos2.start + 1, end: pos2.end + 1 }
        }
        setPos(pos2);
        if (pos.start == sample.length && name.indexOf(" ") == -1 && name)
            setDisabled(false);
    }
    const handlerButton = (toggleModal) => {
        setPhoneNumber(sample);
        setPos({ start: 5, end: 5 }); setName("");
        setDisabled(true);
        toggleModal();
    }

    return (
        <View style={styles.form}>
            <TextInput style={[styles.input, { marginBottom: 24 }]}
                placeholder='Имя' onChangeText={changeName} value={name} />
            <TextInput style={styles.input} onChangeText={changeNumber}
                value={phone_number} selection={pos} onKeyPress={(e) => { handlerForPressedKeys(e.nativeEvent.key) }} />
            <TouchableOpacity disabled={disabled} style={[styles.button, disabled ? { backgroundColor: "#939399" } : null]} title="Заказать"
                onPress={() => handlerButton(props.toggleModal)}>
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