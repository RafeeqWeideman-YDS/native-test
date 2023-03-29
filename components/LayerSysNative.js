import React, { useState, useCallback } from "react";
import { View, FlatList, StyleSheet, Button } from 'react-native';
import Canvas from "./Canvas";

const LayerSysNative = ({ showAddButton = true, PixelSize = 5, disableSetPixels = true }) => {
    const [layers, setLayers] = useState([
        { canvas: <Canvas style={styles.canvas} PixelSize={PixelSize} disableSetPixels={disableSetPixels} /> }
    ])

    const handleAddLayers = useCallback(() => {
        setLayers([...layers, { canvas: <Canvas style={styles.canvas} PixelSize={PixelSize} disableSetPixels={disableSetPixels} /> }])
    }, [layers, PixelSize, disableSetPixels])

    return (
        <View style={styles.container} >
            {showAddButton && <Button style={styles.layerBtn} title="ADD" onPress={handleAddLayers} />}
            <FlatList
                data={layers}
                renderItem={({ item }) => item.canvas}
                contentContainerStyle={styles.contentContainer}
                horizontal={true}
            />
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
    contentContainer: {
        flexDirection: 'row',
        flexGrow: 1,
    }
})

export default LayerSysNative
