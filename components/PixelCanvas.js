import React, { useRef } from 'react';
import { View } from 'react-native';
import Canvas from 'react-native-canvas';

const PixelCanvas = () => {
    const canvasRef = useRef(null);

    const handleCanvas = (canvas) => {
        const ctx = canvas.getContext('2d');
        const pixelSize = 10;
        const numRows = canvas.height / pixelSize;
        const numCols = canvas.width / pixelSize;
        const pixels = Array.from({ length: numRows }, () => Array.from({ length: numCols }, () => 'white'));

        const drawPixel = (row, col, color) => {
            ctx.fillStyle = color;
            ctx.fillRect(col * pixelSize, row * pixelSize, pixelSize, pixelSize);
        };

        canvas.addEventListener('click', (event) => {
            const row = Math.floor(event.offsetY / pixelSize);
            const col = Math.floor(event.offsetX / pixelSize);
            pixels[row][col] = 'black';
            drawPixel(row, col, 'black');
        });

        pixels.forEach((row, rowIndex) => {
            row.forEach((color, colIndex) => {
                drawPixel(rowIndex, colIndex, color);
            });
        });
    };

    return (
        <View style={{ flex: 1 }}>
            <Canvas ref={canvasRef} onLayout={() => canvasRef.current.width = canvasRef.current.offsetWidth} />
        </View>
    );
};

export default PixelCanvas;