import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
const Crisp = (props) => {

    return (
        <TouchableOpacity style={props.selectedFilter == props.text ?
            [styles.filterButton, { backgroundColor: "#317AE8" }] : styles.filterButton} onPress={() => props.setFilter(props.text)}>
            <Text style={props.selectedFilter == props.text ?
                [styles.filterButtonText, { color: "#fff" }] : styles.filterButtonText}>{props.text}</Text>
        </TouchableOpacity>
    );
}



const styles = StyleSheet.create({
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
        color: "#000",
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
    },
});

export default Crisp;