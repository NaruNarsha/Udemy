import {useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function confirmInputHandler() {
    console.log('confirm!');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType='number-pad'
        autoCapitalized='none'
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

//------------------------------------------------------------------------------------------------------------------------
// memo :
//      플렉스 박스 내 요소의 위치는 justifyContent와 alignItems로 제어할 수 있습니다.
//      - justifyContent는 주 축(main axis)을 따라 요소를 정렬하는 방법을 결정합니다. (수평 또는 수직)
//      -  교alignItems는차 축(cross axis)을 따라 요소를 정렬하는 방법을 결정합니다. (수평 또는 수직)
//      예를 들어, flexDirection이 'row'인 경우 justifyContent는 수평 방향을 제어하고, alignItems는 수직 방향을 제어합니다.
//      반대로, flexDirection이 'column'인 경우 justifyContent는 수직 방향을 제어하고, alignItems는 수평 방향을 제어합니다.

//      justifyContent는 기본 중심축인 위에서 아래로 요소를 배치합니다. (React Native의 기본 플렉스 방향이 열방향이기 때문)
//      alignItems는 기본 교차축인 왼쪽에서 오른쪽으로 요소를 배치합니다.
//        - alignItems는 중심축을 가로지르는 가로축을 따라 요소를 배치합니다.
//------------------------------------------------------------------------------------------------------------------------

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#3b021f',
    borderRadius: 8,
    elevation: 4, // only for android, for ios we need to use shadow properties
    shadowColor: 'black', // only for ios
    shadowOffset: {width: 0, height: 2}, // only for ios
    shadowRadius: 6, // only for ios
    shadowOpacity: 0.25, // only for ios
  },
  numberInput: {
    height: 60,
    width: 50,
    fontSize: 32,
    //borderRadius: 8,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
