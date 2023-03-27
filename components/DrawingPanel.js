import React, { useState, useCallback } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { ColorPicker } from 'react-native-color-picker';

const PIXEL_SIZE = 20;

const Pixel = React.memo(({ color, onPress }) => {
    const handlePress = useCallback(() => {
        onPress && onPress();
    }, [onPress]);

    return (
        <View style={[styles.pixel, { backgroundColor: color }]} onTouchStart={handlePress} />
    );
});

const DrawingPanel = () => {
    const [pixels, setPixels] = useState(Array.from({ length: 20 }, () => Array.from({ length: 20 }, () => '#FFFFFF')));
    const [selectedTool, setSelectedTool] = useState('pencil');
    const [selectedColor, setSelectedColor] = useState('#000000');

    const handlePixelPress = (rowIndex, colIndex) => {
        const newPixels = [...pixels];
        if (selectedTool === 'pencil') {
            newPixels[rowIndex][colIndex] = selectedColor;
        } else if (selectedTool === 'eraser') {
            newPixels[rowIndex][colIndex] = '#FFFFFF'
        }
        setPixels(newPixels)
        // newPixels[rowIndex][colIndex] = '#000000';
        // setPixels(newPixels);
    };

    return (
        <View style={styles.container}>
            <View style={styles.toolbar}>
                <TouchableOpacity onPress={() => setSelectedTool('pencil')}>
                    <Text style={[styles.toolButton, selectedTool === 'pencil' && styles.selectedToolButton]}>Pencil</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedTool('eraser')}>
                    <Text style={[styles.toolButton, selectedTool === 'eraser' && styles.selectedToolButton]}>Eraser</Text>
                </TouchableOpacity>
                <ColorPicker
                    onColorSelected={(color) => setSelectedColor(color)}
                    defaultColor={selectedColor}
                    style={{ width: 200, height: 200 }} />
            </View>

            {pixels.map((row, rowIndex) =>
                <View key={rowIndex} style={styles.row}>
                    {row.map((color, colIndex) =>
                        <Pixel style={styles.canvas} key={`${rowIndex}-${colIndex}`} color={color} onPress={() => handlePixelPress(rowIndex, colIndex)} />
                    )}
                </View>
            )}
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: 'lightblue'
    },
    row: {
        flexDirection: 'row',
    },
    pixel: {
        width: PIXEL_SIZE,
        height: PIXEL_SIZE,
        // borderWidth: StyleSheet.hairlineWidth,
    },
    selectedToolButton: {
        backgroundColor: "#333",
        color: "#FFF"
    },
    toolbar: {
        display: 'none'
    },
});

export default DrawingPanel;