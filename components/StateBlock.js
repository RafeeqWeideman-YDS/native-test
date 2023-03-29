import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

const blocks = [
    { id: 1, color: 'red' },
    { id: 2, color: 'green' },
    { id: 3, color: 'blue' },
];

const Block = ({ id, color, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ width: 50, height: 50, backgroundColor: color }} />
        </TouchableOpacity>
    );
};

const StateBlock = () => {
    const [blockStates, setBlockStates] = useState(blocks);

    const handleBlockPress = (id) => {
        setBlockStates((prevBlockStates) =>
            prevBlockStates.map((blockState) =>
                blockState.id === id
                    ? { ...blockState, color: 'yellow' }
                    : blockState
            )
        );
    };

    return (
        <View>
            {blockStates.map((blockState) => (
                <Block
                    key={blockState.id}
                    id={blockState.id}
                    color={blockState.color}
                    onPress={() => handleBlockPress(blockState.id)}
                />
            ))}
        </View>
    );
};

export default StateBlock;