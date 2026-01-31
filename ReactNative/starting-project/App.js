import { StyleSheet, Text, View, Button } from 'react-native';

// React Native의 모든 컴포넌트는 반드시 하나의 최상위 컴포넌트로 감싸져야 합니다.
//  - <View> <View/> 안에는 복수의 <Text> 컴포넌트를 넣을 수 있습니다.
//  - View :: 컴포넌트를 담는 데 사용하는 유일한 컨테이너 컴포넌트
//  - React Native에서는 HTML의 <div>와 같은 역할을 View 컴포넌트가 담당합니다.
// 
//  - View 컴포넌트는 스타일링이 가능하며, 레이아웃을 구성하는 데 사용됩니다.
//  - Text 컴포넌트는 텍스트를 표시하는 데 사용됩니다.
//  - Button 컴포넌트는 버튼을 생성하는 데 사용됩니다.
//    - Button 컴포넌트는 title 속성을 사용하여 버튼에 표시될 텍스트를 지정합니다.

export default function App() {
  // styles는 View나 Text 컴포넌트에 스타일을 적용하는 데 사용됩니다.
  return (
    <View style={styles.container}>
      <View>
        <Text style ={styles.dummyText}>Another piece of text!</Text>
      </View>
      <Text style ={styles.dummyText}>Hello World!</Text>
      <Button title='Tab me!' /> 
    </View>
  );
}

// padding :: 요소 안쪽 여백

// stylesheet 생성
// - StyleSheet.create 메서드를 사용하여 스타일 객체를 생성합니다.
// - 스타일 객체는 CSS와 유사한 속성-값 쌍으로 구성됩니다.
// - 스타일 객체는 컴포넌트의 style 속성에 전달되어 적용됩니다.
// - 스타일 속성은 카멜 케이스(camelCase) 표기법을 사용합니다.
//  - 예: background-color -> backgroundColor
// - 스타일 속성 값은 문자열 또는 숫자로 지정할 수 있습니다.
// - 스타일 객체는 재사용이 가능하며, 여러 컴포넌트에 동일한 스타일을 적용할 수 있습니다.
// - StyleSheet.create 메서드를 사용하면 성능 최적화가 가능합니다.
// - 스타일 객체는 불변(immutable)으로 생성되므로, 런타임에 변경할 수 없습니다.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: 'blue',
  }
});


