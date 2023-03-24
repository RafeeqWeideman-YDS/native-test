import React, { useState } from 'react';
import { View } from 'react-native';

const PIXEL_SIZE = 10;
const CANVAS_SIZE = 30;

const PixelDrawingCanvas = () => {
    const [pixels, setPixels] = useState(Array.from({ length: CANVAS_SIZE * CANVAS_SIZE }, () => false));

    const togglePixel = (index) => {
        setPixels((prevPixels) => {
            const newPixels = [...prevPixels];
            newPixels[index] = !newPixels[index];
            return newPixels;
        });
    };

    return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {pixels.map((isFilled, index) => (
                <View
                    key={index}
                    style={{
                        width: PIXEL_SIZE,
                        height: PIXEL_SIZE,
                        borderWidth: 1,
                        borderColor: 'black',
                        backgroundColor: isFilled ? 'black' : 'white',
                    }}
                    onTouchEnd={() => togglePixel(index)}
                />
            ))}
        </View>
    );
};

export default PixelDrawingCanvas;
