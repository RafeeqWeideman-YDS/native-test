import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const QuickTest = () => {
    const block = <Text style={styles.block} />
    const blocks = Array(15).fill(block);
    const rows = Array(15).fill(blocks);

    return (
        <View style={styles.container} >
            {/* {canvas.map(block => block)} */}
            <View>
                {rows.map((row, rowIndex) => (
                    <View key={rowIndex} style={{ flexDirection: 'row' }}>
                        {row.map((block, blockIndex) => (
                            <View key={blockIndex} style={{ width: 20, height: 20, backgroundColor: 'gray', margin: 1 }} />
                        ))}
                    </View>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    block: {
        height: 50,
        width: 50,
        backgroundColor: 'black',
        margin: 1
    },
})

export default QuickTest
