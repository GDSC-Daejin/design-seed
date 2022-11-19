# @gdsc-dju/styled-components-theme

[![install size](https://packagephobia.com/badge?p=@gdsc-dju/styled-components-theme)](https://packagephobia.com/result?p=@gdsc-dju/styled-components-theme-theme)

## Introduction

`@gdsc-dju/styled-components-theme` is a library for creating colors, font-sizes, window-sizes asset
that using in gdsc-dju websites.

## Installation


```shell
yarn add ui @gdsc-dju/ui
```

### Provider 설정하기

```typescript jsx
import {GdsThemeProvider} from "@gdsc-dju/theme";

<GdsThemeProvider mode={'auto'}> //mode: auto, dark-only, light-only
    <MyThemedComponent/>
</GdsThemeProvider>
```

### CSS를 Reset 해주세요.

`Styled-Components`의 `globalStyle`을 활용하시면 됩니다.

:::caution

기본 font-size는 10px로 설정해주세요

:::

EX
```
  * {
    font-size: 10px;
    word-break: keep-all;
    font-family: 'Google Sans Display','Spoqa Han Sans Neo', sans-serif;
  }
```


### 테마 변경하기

`DarkModeContext` 을 이용해서 테마를 변경할 수 있습니다.

```typescript jsx
import {DarkModeContext} from "@gdsc-dju/theme";

const {isDarkMode, toggleTheme} = useContext(DarkModeContext);

<button onClick={() => toggleTheme()}>
    {isDarkMode ? 'dark' : 'light'}
</button>
```

### 사이드 메뉴 열고 닫기

`MenuContext` 을 이용해서 사이드 메뉴를 열 수 있습니다.

```typescript jsx
import {MenuContext} from "@gdsc-dju/theme";

const {isMenuOpen, toggleMenu, menuHandler} = useContext(MenuContext);

<button onClick={() => toggleMenu()}>
    {isMenuOpen ? 'open' : 'closed'}
</button>
```

## 토큰 사용하기

```typescript jsx
const Box1 = styled.div`
color: ${props => props.theme.colors.grey900};
background: ${props => props.theme.colors.white};
font-size: ${props => props.theme.fontSizes.titleXxl};
`;

const Box2 = styled.div`
color: ${({theme}) => theme.colors.grey900};
background: ${({theme}) => theme.colors.white};
font-size: ${({theme}) => theme.fontSizes.textXxl};
`;
```

## 사용자 커스텀 토큰 사용하기

GdsThemeProvider는 Styled-Components의 `ThemeProvider`를 활용한 HOC입니다.

별도의 설정을 원하시는 경우 아래 예시처럼 별도로 Provider를 생성해서 사용해주세요.


```typescript jsx

type CustomTheme = {
    colors: ColorScheme,
    customColors: CustomColorToken,
};

const theme: CustomTheme = {
    colors: colors.light.scheme,
    customColors: {/* ... */},
};

declare module 'styled-components-theme' {
interface DefaultTheme extends CustomTheme {}
}

// You need to set dark mode context to use dark theme.
const darkMode = useDarkMode();
const menuValue = useToggleMenu();

<DarkModeContext.Provider value={darkMode}>
    <MenuContext.Provider value={menuValue}>
        <ThemeProvider theme={theme}>
            <MyThemedComponent />
        </ThemeProvider>
    </MenuContext.Provider>
</DarkModeContext.Provider>
```