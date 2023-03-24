import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useMachine } from '@xstate/react';
import DrawingMachine from './DrawingMachine';

const PIXEL_SIZE = 10;
const NUM_PIXELS = 50;

export default function PixelDrawingApp() {
    const [drawingState, sendDrawingEvent] = useMachine(DrawingMachine);
    const [pixels, setPixels] = useState(Array(NUM_PIXELS).fill().map(() => Array(NUM_PIXELS).fill(false)));

    const drawPixel = (row, col) => {
        const updatedPixels = [...pixels];
        updatedPixels[row][col] = true;
        setPixels(updatedPixels);
    };

    const erasePixel = (row, col) => {
        const updatedPixels = [...pixels];
        updatedPixels[row][col] = false;
        setPixels(updatedPixels);
    };

    const clearPixels = () => {
        setPixels(Array(NUM_PIXELS).fill().map(() => Array(NUM_PIXELS).fill(false)));
    };

    const renderPixel = (row, col) => {
        return (
            <TouchableOpacity
                key={`${row}-${col}`}
                style={[styles.pixel, pixels[row][col] && styles.pixelFilled]}
                onPress={() => sendDrawingEvent({ type: 'DRAW', row, col })}
                onLongPress={() => sendDrawingEvent({ type: 'ERASE', row, col })}
            />
        );
    };

    const renderRow = (row, index) => {
        return (
            <View key={index} style={styles.row}>
                {Array(NUM_PIXELS).fill().map((_, col) => renderPixel(row, col))}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.grid}>{Array(NUM_PIXELS).fill().map((_, row) => renderRow(row))}</View>
            <View style={styles.controls}>
                <TouchableOpacity style={styles.button} onPress={() => sendDrawingEvent('CLEAR')}>
                    <Text style={styles.buttonText}>Clear</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    grid: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    pixel: {
        width: PIXEL_SIZE,
        height: PIXEL_SIZE,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    pixelFilled: {
        backgroundColor: '#000',
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 20,
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#ccc',
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
    },
});
