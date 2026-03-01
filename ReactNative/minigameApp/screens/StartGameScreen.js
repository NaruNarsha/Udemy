import {TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
  return (
    <View style = {styles.inputContainer}>
      <TextInput style={styles.numberInput} maxLength={2}/>
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StartGameScreen;


const styles = StyleSheet.create({

  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#72063c',
    borderRadius: 8,
    elevation: 4,       // only for android, for ios we need to use shadow properties
    shadowColor: 'black', // only for ios
    shadowOffset: { width: 0, height: 2 }, // only for ios
    shadowRadius: 6, // only for ios
    shadowOpacity: 0.25, // only for ios
  },
  numberInput: {
    height: 60,
    width: 50,
    fontSize: 32,
    //backgroundColor: '#e4d0ff', // 영역 체크용 background color
    //borderRadius: 8,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});