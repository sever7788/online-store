import * as React from 'react';
import PagerView from 'react-native-pager-view';

import { TouchableOpacity, Image, StyleSheet, View, Text } from 'react-native';

import Card from './Card/Card';

const applyFilter = (products, filter) => {
    switch (filter) {
        case 'All': return products;
        case 'Cheap': return products.filter((product) => product.price ==
            Math.min.apply(Math, products.map(function (product) { return product.price; })));
        case 'Best': return products.filter((product) => product.rating ==
            Math.max.apply(Math, products.map(function (product) { return product.rating; })));
        case 'Fast': return products.filter((product) => product.speed ==
            Math.max.apply(Math, products.map(function (product) { return product.speed; })));
    }
}

class Carousel extends React.PureComponent {
    constructor(props) {
        super(props);
        this.childKey = 4;
    }
    render() {
        this.childKey = Math.random();
        return (
            <PagerView style={styles.carousel} pageMargin={-150}
                initialPage={this.props.lastPosition} offscreenPageLimit={10}
                overdrag={true}
                onPageSelected={(e) => { this.props.setPage(e.nativeEvent.position); }}
                key={this.childKey}>
                {applyFilter(this.props.products, this.props.selectedFilter).map(p => {
                    return <View style={styles.page} key={p.id}>
                        <Card navigation={this.props.navigation} id={p.id}
                            setID={this.props.setID} photo={p.photo} name={p.name} price={p.price} rating={p.rating} />
                    </View>
                })}

            </PagerView>
        );
    }
}

const styles = StyleSheet.create({
    carousel: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        position: 'relative',
        width: '100%',
        minHeight: 225,
        height: '31%',
        top: '3%',
    },
});

export default Carousel;