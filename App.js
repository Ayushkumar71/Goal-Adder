import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  // JSX below
  return (
    <View style={styles.container}>
      <View>
        <Text>Hello World!</Text>
      </View>
      <Text>This is me...</Text>
      <Button title='Button'/>  
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
