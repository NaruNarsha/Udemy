import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";




function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  console.log("GoalInput :: ", props.visible);

  // 사용자가 내용을 입력할 때 해당 입력값을 가져노는 역할
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText(""); // 새로운 목표가 추가된 후 입력 필드를 초기화
  }

  // 1. require('../assets/images/goal.png')
  // 2. 파일 상단에 import 구문 추가: import goalImage from '../assets/images/goal.png';
  // 3. Image 컴포넌트에서 source에 goalImage 사용: <Image style={styles.image} source={goalImage} />
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style = {styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>

    </Modal>
  );
}

export default GoalInput;


// 
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    //flexDirection: "column", // "row": 자식들이 가로로 나란히 배치됨, "column": 자식들이 세로로 나란히 배치됨
    justifyContent: "center", // 주축(가로 또는 세로 방향) 기준으로 중앙에 배치
    alignItems: "center",
    //marginBottom: 24,
    //borderBottomWidth: 1,
    //borderBottomColor: "#cccccc",
    //backgroundColor: '#e4bebe',
    padding : 16, // 내부 여백을 16 단위로 설정하여 요소들이 컨테이너의 가장자리에서 떨어지도록 함
    backgroundColor: '#311b6b'
  },
  image:{
    width: 100,
    height: 100,
    margine:20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100, // width: '40%', 버튼의 가로 길이를 부모(View)의 40%로 설정합니다. 즉, 버튼이 부모 컨테이너의 너비의 40%만큼 차지하게 됩니다.
    marginHorizontal: 8, // marginHorizontal: 8, 버튼의 좌우에 각각 8 단위의 여백을 추가합니다. 즉, 버튼의 왼쪽과 오른쪽에 8 단위의 공간이 생깁니다.
  }
});

//===================================================================================================================
// justifyContent: "space-between"은 
// flex 레이아웃에서 자식 요소들을 주축(가로 또는 세로 방향) 기준으로 양 끝에 배치하고, 
// 요소들 사이에 동일한 간격을 만들어줍니다.

// 즉, 첫 번째 자식은 시작점에, 마지막 자식은 끝점에 위치하며, 중간 자식들은 서로 동일한 간격을 두고 배치됩니다.
// 
// 예시:
// 
// flexDirection: "row"일 때 → 가로로 양 끝에 배치, 중간은 균등 간격
// flexDirection: "column"일 때 → 세로로 양 끝에 배치, 중간은 균등 간격
// 이 속성은 레이아웃을 깔끔하게 정렬할 때 매우 유용합니다.
//===================================================================================================================
