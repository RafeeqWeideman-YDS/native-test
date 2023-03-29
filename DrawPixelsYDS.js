import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';

const Block = ({ color, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{ width: 50, height: 50, backgroundColor: color, borderColor: 'grey', borderWidth: 1 }} />
        </TouchableOpacity>
    );
};

export function ParentComponent() {
    const [block1Color, setBlock1Color] = useState((() => Array.from({ length: 20 }, () => '#FFFFFF')));

    const handleBlockPress = (color) => {
        setBlock1Color(color);
    };

    return (
        <View>
            <Block color={block1Color} onPress={() => handleBlockPress('black')} />
            <ChildComponent color={block1Color} onPress={() => handleBlockPress('black')} />
        </View>
    );
}

function ChildComponent({ color, onPress }) {
    return (
        <View>
            <Block color={color} onPress={onPress} />
        </View>
    );
}
export default ChildComponent;
