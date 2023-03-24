import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Pixel from './Pixel';
import { useMachine } from '@xstate/react';
import { drawingMachine } from './Machine';

const DrawingPanel = () => {

    const [pixels, setPixels] = useState(Array.from({ length: 100 }, () => '#FFFFFF'));
    const [state, send] = useMachine(drawingMachine, {
        actions: {
            drawPixel: (context, event) => {
                const { index, color } = event.payload;
                const newPixels = [...pixels];
                newPixels[index] = color;
                setPixels(newPixels);
            },
            clearPixels: () => {
                setPixels(Array.from({ length: 100 }, () => '#FFFFFF'));
            },
        },
    });

    const handlePixelPress = (index) => {
        const color = state.context.color;
        send({ type: 'DRAW', payload: { index, color } });
    };

    const handleClearPress = () => {
        send({ type: 'CLEAR' });
    };

    const renderItem = ({ item, index }) => (
        <Pixel color={item} onPress={() => handlePixelPress(index)} />
    );

    return (
        <View style={styles.container}>
            <View style={styles.panel}>
                <TouchableOpacity style={styles.clearButton} onPress={handleClearPress}>
                    <Text style={styles.clearButtonText}>Clear</Text>
                </TouchableOpacity>
                <FlatList
                    data={pixels}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => `${index}`}
                    numColumns={10}
                    contentContainerStyle={styles.contentContainer}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    panel: {
        width: '80%',
        height: '80%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    clearButton: {
        backgroundColor: '#FF0000',
        padding: 10,
        borderRadius: 1
    }
})

export default DrawingPanel;