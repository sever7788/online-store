import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

const switchingFilter = (setLastPositions, setFilter, Filter, lastPositions, page, selectedFilter) => {
    console.log(lastPositions);
    let lastPositions2 = lastPositions;
    switch (selectedFilter) {
        case "All": lastPositions2[0] = page; setLastPositions(lastPositions2); break;
        case "Cheap": lastPositions2[1] = page; setLastPositions(lastPositions2); break;
        case "Best": lastPositions2[2] = page; setLastPositions(lastPositions2); break;
        case "Fast": lastPositions2[3] = page; setLastPositions(lastPositions2); break;
    }
    setFilter(Filter)
}

const Crisp = (props) => {

    return (
        <TouchableOpacity style={props.selectedFilter == props.text ?
            [styles.filterButton, { backgroundColor: "#317AE8" }] : styles.filterButton} onPress={() =>
                switchingFilter(props.setLastPositions, props.setFilter, props.text, props.lastPositions, props.page, props.selectedFilter)}>
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
        alignItems: 'center',
        justifyContent: 'center',

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