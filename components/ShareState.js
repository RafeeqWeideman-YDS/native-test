import React, { useState } from "react";
import { View, Text, Button } from 'react-native'

export function ParentComponent() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }; 

    return (
        <View>
            <Text>Count: {count}</Text>
            <ChildComponent count={count} handleIncrement={handleIncrement} />
        </View>
    );
}

function ChildComponent(props) {
    return (
        <View>
            <Button title="Increment" onPress={props.handleIncrement} />
            <Text>Count: {props.count}</Text>
        </View>
    );
}

export default ChildComponent