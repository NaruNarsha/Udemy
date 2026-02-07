import React from 'react';
import { Text, View } from 'react-native';

// React Native에서 View는 특정 스타일을 설정하지 않아도 기본적으로 flex container 역할을 합니다.
// 따라서, 자식 요소들은 flexbox 레이아웃 규칙에 따라 배치됩니다. (웹과는 다른 부분...)

//------------------------------------------------------------------------------------------------------------

// React Native의 justifyContent 속성은 flexbox 레이아웃에서 "주 축(main axis)" 방향으로 
// 자식 요소들을 어떻게 배치할지 결정하는 스타일입니다.
// 
// 주로 부모(View)의 flexDirection에 따라 동작 방향이 달라집니다:
// flexDirection: 'row'이면 수평(왼쪽→오른쪽)으로 배치
// flexDirection: 'column'이면 수직(위→아래)으로 배치

// justifyContent 값 예시:
//    flex-start: 시작 지점에 정렬
//    flex-end: 끝 지점에 정렬
//    center: 중앙에 정렬
//    space-between: 첫 요소는 시작, 마지막 요소는 끝, 나머지는 균등하게 배치
//    space-around: 모든 요소 사이에 동일한 간격 배치\

// 예를 들어, 현재 코드에서 justifyContent: 'space-around'
// 는 자식 View(빨강, 파랑, 초록 박스)들이 수평 방향으로 동일한 간격을 두고 배치된다는 의미입니다.
// 즉, "주 축 방향으로 자식 요소들의 배치와 간격을 조절하는 속성"입니다.

//------------------------------------------------------------------------------------------------------------

// React Native의 alignItems 속성은 flexbox 레이아웃에서 "교차 축(cross axis)" 방향으로 
// 자식 요소들을 어떻게 배치할지 결정하는 스타일입니다.
// 
// 교차 축은 flexDirection에 따라 달라집니다:
//    flexDirection: 'row'이면 교차 축은 수직(위↕아래)
//    flexDirection: 'column'이면 교차 축은 수평(왼↔오른쪽)

// alignItems 값 예시:
//    flex-start: 교차 축의 시작 지점에 정렬
//    flex-end: 교차 축의 끝 지점에 정렬
//    center: 교차 축의 중앙에 정렬
//    stretch: 자식 요소를 부모의 교차 축 전체 길이로 늘림(기본값)

// 예를 들어, 현재 코드에서 는 자식 View들이 부모 View의 높이(교차 축 전체)에 맞게 늘어나도록 배치합니다.
// 즉, "교차 축 방향으로 자식 요소들의 정렬 방법을 지정하는 속성"입니다.
export default function App() {
  return (
    <View style={{ padding: 50, flexDirection:'row', width: '80%', height: 300, justifyContent: 'space-around', alignItems: 'stretch', backgroundColor:'lightgray' }}>
      <View style= {{
        backgroundColor: 'red',
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text>1</Text>
      </View>
      <View style= {{
        backgroundColor: 'blue',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text>2</Text>
      </View>
      <View style= {{
        backgroundColor: 'green',
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text>3</Text>
      </View>
    </View>
  );
}
