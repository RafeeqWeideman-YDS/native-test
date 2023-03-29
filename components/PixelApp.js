import React, { useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { useMachine } from '@xstate/react'
import PixelMachine from './PixelMachine'

const PixelApp = () => {
    const [pixel, setPixel] = useMachine(PixelMachine);
    const [change, setChange] = useState([
        { block: <Text style={styles.block} onPress={Draw} /> }
    ])

    function Draw() {
        setChange([{ block: <Text style={[styles.block, { backgroundColor: 'blue' }]} /> }])
    }

    return (
        <View>
            {pixel.matches('blank') && (
                <View>
                    {change.map((data, index) => (
                        <View>
                            {data.block}
                        </View>
                    ))}
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        height: 50,
        width: 50,
        backgroundColor: 'black',
    }
})

export default PixelApp
