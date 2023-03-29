import React, { useState } from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pixel: {
        width: 20,
        height: 20,
        margin: 3,
        borderWidth: StyleSheet.hairlineWidth,
    }
});

const Canvas = () => {
    const [pixels, setPixels] = useState(Array.from({ length: 50 }));

    const handleSetPixels = (index) => {
        setPixels((prevPixels) => {
            const newPixels = [...prevPixels];
            newPixels[index] = (
                <TouchableOpacity onPress={() => handleSetPixels(index)} >
                    <View style={[styles.pixel, { backgroundColor: newPixels[index] ? '#FFFFFF' : 'black' }]} />
                </TouchableOpacity>
            );
            return newPixels
        })
    }

    return (
        <View style={styles.container} >
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }} >

                {pixels.map((pixel, index) => (
                    <TouchableOpacity key={index} onPress={() => handleSetPixels(index)} >
                        <View style={[styles.pixel, { backgroundColor: pixel ? '#FFFFFF' : 'black' }]} />
                    </TouchableOpacity>
                ))}

            </View>
        </View>
    );
};

export default Canvas;