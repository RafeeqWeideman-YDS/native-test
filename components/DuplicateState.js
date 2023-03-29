import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Component1 = () => {
    const [count1, setCount1] = useState(0);

    const incrementCount1 = () => {
        setCount1(count1 + 1);
    };

    return (
        <View>
            <Text>Count in Component 1: {count1}</Text>
            <Button title="Increment Count in Component 1" onPress={incrementCount1} />
        </View>
    );
};

const Component2 = () => {
    const [count2, setCount2] = useState(0);

    const incrementCount2 = () => {
        setCount2(count2 + 1);
    };

    return (
        <View>
            <Text>Count in Component 2: {count2}</Text>
            <Button title="Increment Count in Component 2" onPress={incrementCount2} />
        </View>
    );
};

const Duplicate = () => {
    return (
        <View>
            <Component1 />
            <Component2 />
        </View>
    );
};

export default Duplicate;