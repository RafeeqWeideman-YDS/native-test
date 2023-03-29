import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    block: {
        width: 20,
        height: 20,
        margin: 3,
        borderWidth: StyleSheet.hairlineWidth,
    },
});

const MyComponent = () => {
    const [blocks, setBlocks] = useState(Array.from({ length: 50 }));

    const handleSetBlock = (index) => {
        setBlocks((prevBlocks) => {
            const newBlocks = [...prevBlocks];
            newBlocks[index] = (
                <TouchableOpacity onPress={() => handleSetBlock(index)}>
                    <View style={[styles.block, { backgroundColor: newBlocks[index] ? '#FFFFFF' : 'black' }]} />
                </TouchableOpacity>
            );
            return newBlocks;
        });
    };

    return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {blocks.map((block, index) => (
                <TouchableOpacity key={index} onPress={() => handleSetBlock(index)}>
                    <View style={[styles.block, { backgroundColor: block ? '#FFFFFF' : 'black' }]} />
                </TouchableOpacity>
            ))}
            {blocks.map((block, index) => (
                <TouchableOpacity key={index} onPress={() => handleSetBlock(index)}>
                    <View style={[styles.block, { backgroundColor: block ? '#FFFFFF' : 'black' }]} />
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default MyComponent;