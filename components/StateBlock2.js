import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

const Block = ({ color, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ width: 50, height: 50, backgroundColor: color }} />
        </TouchableOpacity>
    );
};

const StateBlock2 = () => {
    const [block1Color, setBlock1Color] = useState('red');
    const [block2Color, setBlock2Color] = useState('green');

    const handleBlockPress = (color) => {
        setBlock1Color(color);
        setBlock2Color(color);
    };
 
    return (
        <View>
            <Block color={block1Color} onPress={() => handleBlockPress('blue')} />
            <Block color={block2Color} onPress={() => handleBlockPress('yellow')} />
        </View>
    );
};

export default StateBlock2;