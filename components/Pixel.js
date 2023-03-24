import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';

const Pixel = React.memo(({ color, onPress }) => {
  const handlePress = useCallback(() => {
    onPress && onPress();
  }, [onPress]);

  return (
    <View style={[styles.pixel, { backgroundColor: color }]} onTouchStart={handlePress} />
  );
});

const styles = StyleSheet.create({
  pixel: {
    width: 20,
    height: 20,
    margin: 1,
  },
});

export default Pixel;