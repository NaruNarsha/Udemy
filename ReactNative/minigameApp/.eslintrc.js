// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  extends: [
    'plugin:react-native/all',
    'eslint:recommended',
    'plugin:react/recommended', // React 관련 규칙 적용
    'plugin:prettier/recommended', // Prettier 설정 추가
    'plugin:react/jsx-runtime',
  ],
  plugins: ['react', 'react-native', 'prettier'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/jsx-boolean-value': ['warn', 'always'], //  JSX에서 불리언 값의 기본값을 명시적으로 지정하도록 경고
    'react/self-closing-comp': 'warn', // 내용이 없는 태그는 셀프 클로징 태그로 작성하라는 경고 표시
    'react/jsx-key': 'warn', // 리스트 렌더링 시 key 속성이 없는 경우 경고 표시
    'no-console': 'warn', // console.log와 같은 콘솔 사용을 경고
    'no-undef': 'warn',
    'no-unused-vars': 'warn',
    'react-native/no-inline-styles': 'off',
    'react-native/sort-styles': 'off', // style sort order ['error', 'asc', {ignoreClassNames: false, ignoreStyleProperties: true}],
    'react-native/no-unused-styles': 'warn', // 사용하지 않는 스타일 경고
    'react-native/no-color-literals': 'off', // style color to constants
    'import/extensions': 'off', // Disable for react-native imports
    'import/no-unresolved': 'off', // Disable for react-native imports
    'react/jsx-filename-extension': [1, {extensions: ['.tsx', '.jsx', '.js']}],
    'prettier/prettier': ['error'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
