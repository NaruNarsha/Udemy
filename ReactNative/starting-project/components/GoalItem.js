import { StyleSheet, View, Text, Pressable } from "react-native";

/**
  Pressable은 React Native에서 터치 이벤트(예: 클릭, 탭 등)를 감지할 수 있는 컴포넌트입니다. 
  사용자가 해당 영역을 누르면 지정한 콜백 함수(onPress 등)가 실행됩니다. 
  Pressable은 다양한 터치 상태(눌림, 포커스, 호버 등)에 따라 스타일을 동적으로 변경할 수 있어, 
  버튼이나 인터랙티브 UI를 만들 때 자주 사용됩니다.

  주요 특징:
    - onPress, onLongPress 등 다양한 이벤트 핸들러 지원
    - pressed 상태에 따라 스타일을 변경 가능
    - View, Text 등 다른 컴포넌트를 감싸서 터치 가능하게 만듦
 */

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
