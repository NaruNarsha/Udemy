import {StyleSheet} from 'react-native';

import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (
    <LinearGradient colors={['#4e0329','#ddb52f']} style={styles.rootScreen}>
      <StartGameScreen />
    </LinearGradient>
  );
}

//---------------------------------------------------------------------------------------------------------
// 최초에 rootScreen 설정을 하여도 윗부분만 배경이 노란색이고 아래는 흰색으로 나오는 이유는
// 필요한 공간만 차지하는 게 기본 설정이기 때문입니다. 
// 따라서, rootScreen 스타일에 flex: 1을 추가하여 전체 화면을 차지하도록 설정해야 합니다. 

// View 컴포넌트는 기본적으로 필요한 공간만 차지하는 특성이 있습니다.
// 따라서, rootScreen 스타일에 flex: 1을 추가하여 전체 화면을 차지하도록 설정해야 합니다.
//---------------------------------------------------------------------------------------------------------

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1, // 전체 화면을 차지하도록 설정
  }
});
