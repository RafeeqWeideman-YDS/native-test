import React, { useState } from "react";
import { View, Text, StyleSheet } from 'react-native'

const MirrorState = () => {
    const [block, setBlock] = useState([
        { block: <View style={[styles.block, { backgroundColor: '#FFFFFF', width: 50, height: 50 }]} onPress={handleSetBlock} /> }
    ])

    function handleSetBlock() {
        setBlock([
            { block: <View style={[styles.block, { backgroundColor: 'black', width: 50, height: 50 }]} /> }
        ])
    }


    return (
        <View>
            <View>
                {block.map((data, index) => (
                    <View key={index} >
                        {data.block}
                    </View>
                ))}
            </View>
            <View>
                {block.map((data, index) => (
                    <View key={index} >
                        {data.block}
                    </View>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        borderWidth: 1,
        borderColor: 'grey'
    }
})

export default MirrorState
