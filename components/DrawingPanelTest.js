import React, { useState, useCallback } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Pixel from './Pixel';

const DrawingPanel = () => {
    const [pixels, setPixels] = useState(Array.from({ length: 100 }, () => '#FFFFFF'));

    const handlePixelPress = useCallback((index) => {
        const newPixels = [...pixels];
        newPixels[index] = '#000000';
        setPixels(newPixels);
    }, [pixels]);

    const renderItem = useCallback(({ item, index }) => (
        <Pixel color={item} onPress={() => handlePixelPress(index)} />
    ), [handlePixelPress]);

    return (
        <View style={styles.container}>
            <FlatList
                data={pixels}
                renderItem={renderItem}
                keyExtractor={(item, index) => `${index}`}
                numColumns={10}
                contentContainerStyle={styles.contentContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    contentContainer: {
        padding: 1,
    },
});

export default DrawingPanel;