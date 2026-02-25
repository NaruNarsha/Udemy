module.exports = {
  endOfLine: 'auto',
  // 코드 한줄의 개수
  printWidth: 160,

  // 들여쓰기 너비 수(탭을 사용할 경우 몇칸을 띄워줄지)
  tabWidth: 2,

  // 탭 사용 여부 (미사용 시 스페이스바로 간격조정을 해야함.)
  useTabs: false,

  //명령문의 끝에 세미콜론(;)을 인쇄합니다.
  semi: true,

  //큰따옴표("") 대신 작은따옴표('')를 사용여부
  singleQuote: true,

  //객체나 배열을 작성하여 데이터를 넣을때, 마지막에 후행쉼표를 넣을지 여부
  trailingComma: 'all',

  //개체 리터럴에서 대괄호 사이의 공백을 넣을지 여부
  bracketSpacing: false,
  jsxSingleQuote: true,
  // JSX의 마지막 `>`를 다음 줄로 내릴지 여부
  bracketSameLine: true,
  //단독 화살표 함수의 매개 변수 주위에 괄호를 자동으로 붙힘 (default: 'avoid')
  arrowParens: 'avoid',
};
