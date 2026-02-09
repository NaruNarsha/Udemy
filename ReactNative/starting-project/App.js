import { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

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
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [courseGoals, setCourseGoals] = useState([]);

  // 사용자가 내용을 입력할 때 해당 입력값을 가져노는 역할
  function goalInputHandler(enteredText) {
    //console.log(enteredText);

    setEnteredGoalText(enteredText);
  };


  // 버튼을 누르면 작동하는 함수
  function addGoalHandler() {
    //console.log(enteredGoalText);

    // 기존의 courseGoals 배열을 복사하고, 새로운 목표를 추가
    // ... (전개연산자)
    // 아래 형태를 사용하는 이유 :
    //    React의 상태 업데이트는 비동기적으로 처리될 수 있으므로,
    //    이전 상태에 의존하는 새로운 상태를 설정할 때는
    //    함수형 업데이트 형태를 사용하는 것이 안전합니다.
    //  
    //    이전 상태를 직접 참조하는 대신, 함수의 인자로 이전 상태를 받아와서 새로운 상태를 계산합니다
    // setCourseGoals([...currentCourseGoals, enteredGoalText]);
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}]);
  }

  // onChangeText :: React Naitve에서 활용하는 프로퍼티로 텍스트 입력이 변경될 때마다 호출되는 콜백 함수를 지정합니다.
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput} 
          placeholder = 'Your course goal!' 
          onChangeText = {goalInputHandler}
        />
        <Button title = 'Add Goal' onPress ={addGoalHandler}  />
      </View>
      <View style = {styles.goalsContainer}>
        <FlatList 
          data ={courseGoals} 
          renderItem={(itemData) => {
            return (
              <View style = {styles.goalItem} >
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
        }}
        keyExtractor={(item, index) =>  {
          return item.id;
        }}
        />
        {/* <ScrollView>
          {courseGoals.map((goal, index) => 
            <View key={index} style={styles.goalItem} >
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          )}
        </ScrollView> */}
      </View>
    </View>
  );
}



//========================================================================================================
// padding :: 요소 안쪽 여백

// stylesheet 생성
//    - StyleSheet.create 메서드를 사용하여 스타일 객체를 생성합니다.
//    - 스타일 객체는 CSS와 유사한 속성-값 쌍으로 구성됩니다.
//    - 스타일 객체는 컴포넌트의 style 속성에 전달되어 적용됩니다.
//    - 스타일 속성은 카멜 케이스(camelCase) 표기법을 사용합니다.
//     - 예: background-color -> backgroundColor
//    - 스타일 속성 값은 문자열 또는 숫자로 지정할 수 있습니다.
//    - 스타일 객체는 재사용이 가능하며, 여러 컴포넌트에 동일한 스타일을 적용할 수 있습니다.
//    - StyleSheet.create 메서드를 사용하면 성능 최적화가 가능합니다.
//    - 스타일 객체는 불변(immutable)으로 생성되므로, 런타임에 변경할 수 없습니다.
//========================================================================================================
const styles = StyleSheet.create({
  appContainer : {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#d1b5b5',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    //backgroundColor: '#e4bebe',
  },
  textInput : {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5,
    //backgroundColor: 'yellow',
  },   
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  }
});


