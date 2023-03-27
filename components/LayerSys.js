import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Canvas from './Canvas';

const LayerSys = () => {
    const [layer, setLayer] = useState([
        { canvas: <Canvas /> }
    ]);
    const [selected, setSelected] = useState(-1);

    // ADD LAYER
    function handleAddFunction() {
        setLayer([...layer, { canvas: <Canvas /> }]);
    }

    // SELECT LAYER
    function handleSelectedLayer(index) {
        setSelected(index);
    }

    return (
        <View style={styles.container} >
            <View style={{ flexDirection: 'row' }}>
                <Button title="ADD" onPress={handleAddFunction} />
                <View style={{
                    flex: 1,
                    backgroundColor: 'grey',
                    overflow: 'scroll',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                }}>
                    {layer.map((data, index) => (
                        <View
                            key={index}
                            style={{ margin: 10, backgroundColor: selected === index ? 'lightblue' : 'white' }}
                            onPress={() => handleSelectedLayer(index)}
                        >
                            <View>
                                {data.canvas}
                            </View>
                        </View>
                    ))}
                </View>
            </View>
            {/*RENDER SELECTED LAYER */}
            <View>
                {selected !== -1 && layer[selected].canvas}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        top: 10
    }
})

export default LayerSys;
