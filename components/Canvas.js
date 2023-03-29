import React, { useState, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';

const PixelSize = 5;
const disableSetPixels = false;

const Pixel = React.memo(({ color, onPress, PixelSize }) => {
    const handlePress = useCallback(() => {
        onPress && onPress();
    }, [onPress]);
    return (
        <View style={[styles.pixel, { backgroundColor: color, width: PixelSize, height: PixelSize }]} onTouchStart={handlePress} />
    );
});

const DrawingPanel = ({ PixelSize, disableSetPixels }) => {
    const [pixels, setPixels] = useState(Array.from({ length: 20 }, () => Array.from({ length: 20 }, () => '#FFFFFF')));


    const handlePixelPress = (rowIndex, colIndex) => {
        if (!disableSetPixels) {
            const newPixels = [...pixels];
            newPixels[rowIndex][colIndex] = '#000000';
            setPixels(newPixels);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.canvas} >
                {pixels.map((row, rowIndex) =>
                    <View key={rowIndex} style={styles.row}>
                        {row.map((color, colIndex) =>
                            <Pixel
                                key={`${rowIndex}-${colIndex}`}
                                color={color} onPress={() => handlePixelPress(rowIndex, colIndex)}
                                PixelSize={PixelSize}
                                disableSetPixels={disableSetPixels}
                            />
                        )}
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    pixel: {
        width: PixelSize,
        height: PixelSize,
        borderWidth: StyleSheet.hairlineWidth,
    },
    canvas: {
        margin: 5
    }
});

export default DrawingPanel;