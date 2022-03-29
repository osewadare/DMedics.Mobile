import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Provider } from "react-redux";
import HomeScreen from './screens/HomeScreen';


export default function App() {
  return (
    <HomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0facd7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
