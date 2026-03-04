import {View, Text, Pressable, StyleSheet} from 'react-native';

// Pressable은 React Native에서 터치 가능한(클릭 가능한) 영역을 만들 때 사용하는 컴포넌트입니다.
//
//    - 버튼, 카드, 이미지 등 다양한 UI 요소에 터치(클릭, 탭) 이벤트를 적용할 수 있습니다.
//    - onPress, onLongPress, onPressIn, onPressOut 등 다양한 터치 이벤트 핸들러를 지원합니다.
//    - TouchableOpacity, TouchableHighlight 등과 비슷하지만, 더 유연하고 다양한 스타일 및 효과를 줄 수 있습니다.
//    - 즉, Pressable을 사용하면 사용자가 누를 수 있는 커스텀 버튼이나 인터랙티브한 UI를 쉽게 만들 수 있습니다.

function PrimaryButton({children, onPress}) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({pressed}) => (pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer)}
        onPress={onPress}
        android_ripple={{color: '#a5366d'}}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden', // for android ripple effect to be contained within the border radius
  },
  buttonInnerContainer: {
    backgroundColor: '#72063c',
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2, // only for android, for ios we need to use shadow properties
    margin: 4,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
    // for android, the ripple effect will handle the visual feedback, so we don't need to change the opacity
    // for ios, we can use the pressed state to change the opacity for visual feedback
  },
});
