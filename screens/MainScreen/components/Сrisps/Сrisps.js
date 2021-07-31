import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import Crisp from './Crisp';
class Crisps extends React.PureComponent {

    render() {

        return (
            <View style={styles.blockButtons} >
                <Crisp text="All" setFilter={this.props.setFilter}
                    setLastPositions={this.props.setLastPositions} selectedFilter={this.props.selectedFilter}
                    lastPositions={this.props.lastPositions} page={this.props.page} />
                <Crisp text="Cheap" setFilter={this.props.setFilter}
                    setLastPositions={this.props.setLastPositions} selectedFilter={this.props.selectedFilter}
                    lastPositions={this.props.lastPositions} page={this.props.page} />
                <Crisp text="Best" setFilter={this.props.setFilter}
                    setLastPositions={this.props.setLastPositions} selectedFilter={this.props.selectedFilter}
                    lastPositions={this.props.lastPositions} page={this.props.page} />
                <Crisp text="Fast" setFilter={this.props.setFilter}
                    setLastPositions={this.props.setLastPositions} selectedFilter={this.props.selectedFilter}
                    lastPositions={this.props.lastPositions} page={this.props.page} />
            </View>
        );
    }
}



const styles = StyleSheet.create({
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

export default Crisps;