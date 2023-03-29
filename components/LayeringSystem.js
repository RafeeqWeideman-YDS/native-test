import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

const PixelArtLayer = ({ width, height, pixels }) => {
    const pixelSize = 10; // size of each pixel in pixels
    const styles = StyleSheet.create({
        container: {
            width: width * pixelSize,
            height: height * pixelSize,
            position: 'absolute',
        },
        pixel: {
            width: pixelSize,
            height: pixelSize,
            backgroundColor: 'black',
        },
    });

    return (
        <View style={styles.container}>
            {pixels.map((row, i) => (
                <View key={i} style={{ flexDirection: 'row' }}>
                    {row.map((color, j) => (
                        <View key={j} style={[styles.pixel, { backgroundColor: color }]} />
                    ))}
                </View>
            ))}
        </View>
    );
};

const PixelArt = () => {
    const [layers, setLayers] = useState([
        {
            width: 16,
            height: 16,
            pixels: Array.from({ length: 16 }, () => Array.from({ length: 16 }, () => 'white')),
        },
        {
            width: 16,
            height: 16,
            pixels: Array.from({ length: 16 }, () => Array.from({ length: 16 }, () => 'white')),
        },
    ]);

    return (
        <View style={{ flex: 1 }}>
            {layers.map((layer, i) => (
                <PixelArtLayer key={i} {...layer} />
            ))}
        </View>
    );
};

export default PixelArt;