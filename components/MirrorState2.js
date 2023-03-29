import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const MirrorState = () => {
  const [block, setBlock] = useState(false)

  function handleSetBlock() {
    setBlock(!block)
  }

  return (
    <View>
      <TouchableOpacity onPress={handleSetBlock}>
        <View style={[styles.block, { backgroundColor: block ? 'black' : 'white' }]} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    width: 50,
    height: 50,
    borderWidth: 3,
    borderColor: 'grey'
  }
})

export default MirrorState
