import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import Home from './src/screens/Home';
import { globalStyles } from './src/styles/global';

export default function App() {
  return (
    <View style={globalStyles.container}>
      <Home />
      <StatusBar style="light" backgroundColor="#004589" />
    </View>
  );
}
