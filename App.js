import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import DrawingPanel from './components/DrawingPanel';
// import LayerSys from './components/LayerSys';
import Canvas from './components/Canvas';
// import LayerSysNative from './components/LayerSysNative';
import DrawPixelsYDS, { ParentComponent } from './DrawPixelsYDS';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Test App</Text> */}
      {/* <LayerSysNative /> */}
      {/* <LayerSysNative showAddButton={false} PixelSize={15} disableSetPixels={false} /> */}
      {/* <Canvas PixelSize={15} /> */}
      {/* <Canvas PixelSize={15} /> */}
      {/* <DrawPixelsYDS /> */}
      <ParentComponent />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
