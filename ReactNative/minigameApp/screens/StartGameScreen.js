import {TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
  return (
    <View style = {styles.inputContainer}>
      <TextInput />
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
    borderRadius: 8,
    backgroundColor: '#72063c',
    elevation: 4,       // only for android, for ios we need to use shadow properties
    shadowColor: 'black', // only for ios
    shadowOffset: { width: 0, height: 2 }, // only for ios
    shadowRadius: 6, // only for ios
    shadowOpacity: 0.25, // only for ios
  }
});