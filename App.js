import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import DrawingPanel from './components/DrawingPanel';
// import LayerSys from './components/LayerSys';
import Canvas from './components/Canvas';
import LayerSysNative from './components/LayerSysNative';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Test App</Text> */}
      <LayerSysNative />
      <Canvas PixelSize={15} />
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
