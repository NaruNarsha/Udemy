import { StyleSheet, Text, View, Button } from 'react-native';

// <View> <View/> 안에는 복수의 <Text> 컴포넌트를 넣을 수 있습니다.
// View :: 컴포넌트를 담는 데 사용하는 유일한 컨테이너 컴포넌트
export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Another piece of text!</Text>
      </View>
      <Text>Hello World!</Text>
      <Button title='Tab me!' /> 
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
